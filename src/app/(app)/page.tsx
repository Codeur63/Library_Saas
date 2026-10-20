import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import { LibraryOverviewSkeleton } from "@/components/feedback/skeletons";
import {
  ArrowRight,
  Binary,
  ChevronRight,
  ClipboardList,
  FileDown,
  FileSearch,
  FileText,
  GraduationCap,
  Search,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";

import { FACULTIES } from "@/constants/faculties";
import { FILIERE_ICONS } from "@/constants/filieres";
import { ROUTES, documentRoute } from "@/constants/routes";
import DownloadCount from "@/features/documents/components/download-count";
import { getCurrentUser, type CurrentUser } from "@/server/current-user";
import { getLibraryOverview } from "@/server/services/library.service";
import type { LibraryOverview } from "@/types/library";

const primaryButton =
  "inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90";
const secondaryButton =
  "inline-flex h-11 items-center justify-center gap-2 rounded-md border border-border-strong bg-white px-6 text-sm font-medium text-foreground transition-colors hover:bg-surface";

export const metadata: Metadata = {
  title: "Upac Library — Bibliothèque numérique universitaire",
  description:
    "Cours, travaux dirigés, examens et mémoires en ligne pour les étudiants de toutes les filières de l'Université Protestante d'Afrique Centrale.",
};

const STEPS = [
  { icon: Search, title: "Rechercher", text: "Cherchez par titre, matière ou filière." },
  { icon: SlidersHorizontal, title: "Filtrer", text: "Affinez par niveau, matière et type de document." },
  { icon: FileDown, title: "Télécharger", text: "Récupérez le document en quelques secondes." },
];

const CATEGORY_ICONS: { match: string; icon: LucideIcon }[] = [
  { match: "cours", icon: FileText },
  { match: "td", icon: ClipboardList },
  { match: "exam", icon: FileSearch },
  { match: "mémoire", icon: GraduationCap },
];

function iconForCategory(name: string): LucideIcon {
  const lower = name.toLowerCase();
  return CATEGORY_ICONS.find((entry) => lower.includes(entry.match))?.icon ?? FileText;
}

const FAQ = [
  {
    question: "Comment télécharger un document ?",
    answer:
      "Ouvrez la bibliothèque, recherchez ou filtrez les documents, puis cliquez sur le bouton « Télécharger » de la ressource souhaitée.",
  },
  {
    question: "La consultation est-elle gratuite pour les étudiants ?",
    answer:
      "Oui, l’accès aux ressources est gratuit pour les étudiants inscrits à l’Université Protestante d’Afrique Centrale.",
  },
  {
    question: "Comment un enseignant publie-t-il un document ?",
    answer:
      "La publication est gérée par la direction de la bibliothèque. Contactez le secrétariat de votre filière pour soumettre un document.",
  },
  {
    question: "Puis-je retrouver les documents d’une matière précise ?",
    answer:
      "Oui, utilisez le filtre « Matière » de la bibliothèque, ou les pages dédiées de chaque filière.",
  },
];

export default async function AccueilPage() {
  const user = await getCurrentUser();

  return (
    <div>
      <section className="mx-auto grid w-full max-w-[1280px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-text-muted">
            Université Protestante d’Afrique Centrale
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            La bibliothèque académique de l’UPAC
          </h1>
          <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-text-secondary">
            Cours, travaux dirigés, examens et mémoires en ligne pour les étudiants de toutes les
            filières. Trouvez et téléchargez votre document en quelques secondes.
          </p>
          <form
            action={ROUTES.bibliotheque}
            method="get"
            role="search"
            className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="recherche-accueil" className="sr-only">
              Rechercher un document
            </label>
            <input
              id="recherche-accueil"
              name="q"
              type="search"
              placeholder="Rechercher un cours, un examen, un TD..."
              className="h-11 flex-1 rounded-md border border-border-strong bg-white px-4 text-sm text-foreground transition-colors placeholder:text-muted-foreground/60 hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            />
            <button type="submit" className={primaryButton}>
              Rechercher
              <Search size={16} aria-hidden />
            </button>
          </form>
          <p className="mt-4 text-xs text-text-muted">
            Ou{" "}
            <Link
              href={ROUTES.filieres}
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              explorez par filière
            </Link>
          </p>
        </div>

        <div
          className="relative hidden aspect-[4/3] overflow-hidden rounded-lg border border-border lg:block"
          aria-hidden
        >
          <Image
            src="/university.jpg"
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 0px, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      {user && (
        <Suspense fallback={<LibraryOverviewSkeleton />}>
          <LibraryOverviewSection user={user} />
        </Suspense>
      )}

      <section className="mx-auto w-full max-w-[1280px] px-4 py-14 sm:px-6">
        <div className="border-t border-border pt-14">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-text-muted">
            Notre institution
          </p>
          <h2 className="mt-3 max-w-[38ch] text-2xl font-semibold tracking-tight text-foreground">
            L’UPAC, quatre facultés au service de chaque vocation
          </h2>
          <p className="mt-4 max-w-[80ch] text-sm leading-relaxed text-text-secondary">
            Sur la colline de Djoungolo à Yaoundé (Cameroun), l’Université Protestante d’Afrique
            Centrale — institution confessionnelle d’enseignement supérieur fondée en 1962 —
            structure son offre de formation autour de quatre facultés principales.
          </p>
        </div>

        <ul className="mt-8 divide-y divide-border border-y border-border">
          {FACULTIES.map((faculty) => {
            const Icon = faculty.icon;
            return (
              <li key={faculty.code} className="px-1 py-6 sm:px-3">
                <div className="grid gap-4 md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] md:gap-8">
                  <div className="flex min-w-0 items-start gap-3">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-surface text-text-secondary"
                      aria-hidden
                    >
                      <Icon size={18} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold leading-snug text-foreground">
                        {faculty.name}
                      </h3>
                      <p className="mt-1 text-xs text-text-muted">
                        {faculty.code}
                        {faculty.established ? ` · depuis ${faculty.established}` : ""}
                      </p>
                    </div>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {faculty.description}
                    </p>
                    <dl className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                      {faculty.departments.map((dept) => (
                        <div key={dept.name}>
                          <dt className="text-xs font-semibold text-foreground">{dept.name}</dt>
                          {dept.filieres.length > 0 ? (
                            <dd className="mt-1.5 text-xs leading-relaxed text-text-muted">
                              {dept.filieres.map((filiere) => (
                                <span key={filiere.label} className="block">
                                  {filiere.label}
                                  {filiere.options ? ` — ${filiere.options.join(" · ")}` : ""}
                                </span>
                              ))}
                            </dd>
                          ) : null}
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {STEPS.map((step, index) => (
            <div key={step.title} className={index > 0 ? "md:border-l md:border-border md:pl-12" : ""}>
              <div className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-surface text-text-secondary"
                  aria-hidden
                >
                  <step.icon size={18} />
                </span>
                <h2 className="text-base font-semibold text-foreground">{step.title}</h2>
              </div>
              <p className="mt-3 max-w-[40ch] text-sm leading-relaxed text-text-secondary">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-4 py-14 sm:px-6">
        <div className="border-t border-border pt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Questions fréquentes
          </h2>
        </div>
        <ul className="mt-6 divide-y divide-border border-y border-border">
          {FAQ.map((item) => (
            <li key={item.question}>
              <details className="group">
                <summary className="flex cursor-pointer items-center gap-3 py-4 text-sm font-semibold text-foreground marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40">
                  <ChevronRight
                    size={16}
                    aria-hidden
                    className="transition-transform group-open:rotate-90"
                  />
                  {item.question}
                </summary>
                <p className="pb-4 pl-7 text-sm leading-relaxed text-text-secondary">
                  {item.answer}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-surface border-t border-border">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              {user ? "Poursuivez votre recherche" : "Rejoignez la bibliothèque numérique"}
            </h2>
            <p className="mt-2 max-w-[60ch] text-base text-text-secondary">
              {user
                ? "Explorez l’ensemble du catalogue, filtrez par filière, niveau et matière, et enregistrez vos favoris."
                : "Un compte vous permet de retrouver vos filières préférées et de suivre les nouvelles ressources publiées."}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            {user ? (
              <Link href={ROUTES.bibliotheque} className={primaryButton}>
                Accéder à la bibliothèque
              </Link>
            ) : (
              <>
                <Link href={ROUTES.register} className={primaryButton}>
                  Créer un compte
                </Link>
                <Link href={ROUTES.login} className={secondaryButton}>
                  Se connecter
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

async function LibraryOverviewSection({ user }: { user: CurrentUser }) {
  const overview = await getLibraryOverview(async () => user);
  return <LibrarySections overview={overview} />;
}

function LibrarySections({ overview }: { overview: LibraryOverview }) {
  const stats = [
    { label: "Documents", value: overview.totals.documents, suffix: "publics" },
    { label: "Filières", value: overview.totals.programs, suffix: "représentées" },
    { label: "Matières", value: overview.totals.subjects, suffix: "couvertes" },
    { label: "Types", value: overview.totals.categories, suffix: "de ressources" },
  ];
  const recent = overview.recentDocuments;
  const categories = overview.categories.filter((category) => category.count > 0);
  const popularMatieres = overview.topSubjects.slice(0, 6);
  const filieres = overview.programs.filter((program) => program.count > 0);

  return (
    <>
      <section className="border-y border-border">
        <dl className="mx-auto grid w-full max-w-[1280px] grid-cols-2 gap-px bg-border px-4 sm:px-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-background px-2 py-8 text-center lg:py-10">
              <dt className="text-xs font-medium uppercase tracking-[0.14em] text-text-muted">
                {stat.label}
              </dt>
              <dd className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
                {stat.value}
                <span className="ml-1 text-sm font-normal text-text-secondary">{stat.suffix}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {recent.length > 0 && (
        <section className="bg-surface border-b border-border">
          <div className="mx-auto w-full max-w-[1280px] px-4 py-14 sm:px-6">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Derniers documents
              </h2>
              <Link
                href={ROUTES.bibliotheque}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline"
              >
                Tout voir
                <ArrowRight size={15} aria-hidden />
              </Link>
            </div>
            <ul className="mt-6 divide-y divide-border border-y border-border bg-white">
              {recent.map((doc) => (
                <li key={doc.id}>
                  <Link
                    href={documentRoute(doc.id)}
                    className="flex flex-col gap-1 px-1 py-4 transition-colors hover:bg-surface sm:flex-row sm:items-baseline sm:gap-4 sm:px-3"
                  >
                    <span className="min-w-0 truncate text-sm font-medium text-foreground">
                      {doc.title}
                    </span>
                    <span className="text-xs text-text-muted sm:ml-auto shrink-0">
                      {doc.subject.program.name} · {doc.subject.level.code} · {doc.subject.name}
                    </span>
                    <span className="text-xs text-text-muted">
                      <DownloadCount count={doc.downloadCount} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {categories.length > 0 && (
        <section className="mx-auto w-full max-w-[1280px] px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Par type de ressource
          </h2>
          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const Icon = iconForCategory(category.name);
              return (
                <li key={category.id}>
                  <Link
                    href={`${ROUTES.bibliotheque}?categoryId=${category.id}`}
                    className="group flex items-center gap-4 rounded-lg border border-border bg-white p-5 transition-colors hover:border-border-strong hover:bg-surface"
                  >
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-surface text-text-secondary"
                      aria-hidden
                    >
                      <Icon size={18} />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-foreground">
                        {category.name}
                      </span>
                      <span className="block text-xs text-text-muted">
                        {category.count} {category.count > 1 ? "documents" : "document"}
                      </span>
                    </span>
                    <ChevronRight
                      size={16}
                      aria-hidden
                      className="ml-auto text-text-muted transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {popularMatieres.length > 0 && (
        <section className="mx-auto w-full max-w-[1280px] px-4 py-14 sm:px-6">
          <div className="border-t border-border pt-14">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Matières populaires
            </h2>
          </div>
          <ul className="mt-6 flex flex-wrap gap-2">
            {popularMatieres.map((subject) => (
              <li key={subject.id}>
                <Link
                  href={`${ROUTES.bibliotheque}?subjectId=${subject.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm text-foreground transition-colors hover:border-border-strong hover:bg-surface"
                >
                  {subject.name}
                  <span className="text-xs text-text-muted">{subject.count}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {filieres.length > 0 && (
        <section className="mx-auto w-full max-w-[1280px] px-4 py-14 sm:px-6">
          <div className="border-t border-border pt-14">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Explorer par filière
              </h2>
              <Link
                href={ROUTES.filieres}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline"
              >
                Toutes les filières
                <ArrowRight size={15} aria-hidden />
              </Link>
            </div>
          </div>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {filieres.map((program) => {
              const Icon = FILIERE_ICONS[program.name] ?? Binary;
              return (
                <li key={program.id}>
                  <Link
                    href={`${ROUTES.bibliotheque}?programId=${program.id}`}
                    className="flex flex-col gap-2 px-1 py-4 transition-colors hover:bg-surface sm:px-3 md:flex-row md:items-center md:gap-4"
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-surface text-text-secondary"
                        aria-hidden
                      >
                        <Icon size={18} />
                      </span>
                      <span className="text-sm font-semibold text-foreground">{program.name}</span>
                    </span>
                    <span className="min-w-0 truncate text-xs text-text-muted md:ml-4">
                      {program.subjectNames.slice(0, 3).join(" · ")}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-medium text-text-secondary md:ml-auto shrink-0">
                      {program.count} {program.count > 1 ? "documents" : "document"}
                      <ArrowRight size={14} aria-hidden />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </>
  );
}
