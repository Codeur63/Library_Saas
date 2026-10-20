import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { SessionProvider } from "@/features/auth/components/session-provider";
import { FavoritesProvider } from "@/features/documents/components/favorites-provider";
import { getCurrentUser } from "@/server/current-user";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();

  return (
    <SessionProvider initialProfile={currentUser}>
      <FavoritesProvider>
        <div className="flex min-h-screen flex-col bg-background">
          <Header initialProfile={currentUser} />
          <main id="contenu" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </FavoritesProvider>
    </SessionProvider>
  );
}
