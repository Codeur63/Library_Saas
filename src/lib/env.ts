import "server-only";

import { publicEnv } from "@/lib/env-public";
import { logger } from "@/server/logger";

function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Variable d’environnement manquante : ${name}`);
  }
  return value;
}

function requiredNumber(name: string, fallback: number): number {
  const raw = process.env[name];
  if (!raw) return fallback;
  const value = Number(raw);
  if (Number.isNaN(value) || value <= 0) {
    throw new Error(`Variable d’environnement invalide : ${name} (attendu un nombre positif)`);
  }
  return value;
}

const isProduction = process.env.NODE_ENV === "production";

export const env = {
  ...publicEnv,
  serviceRoleKey: required("SUPABASE_SERVICE_ROLE_KEY"),
  documentStorageBucket: process.env.DOCUMENT_STORAGE_BUCKET ?? "university-documents",
  maxUploadSizeMb: requiredNumber("MAX_UPLOAD_SIZE_MB", 50),
  inactivityMonths: requiredNumber("INACTIVITY_MONTHS", 6),
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  /** Secret partagé protégeant les routes /api/cron/*. Requis pour les activer. */
  cronSecret: process.env.CRON_SECRET,
  errorWebhookUrl: process.env.ERROR_WEBHOOK_URL,
  /** Rate-limit partagé entre instances (facultatif, repli mémoire sinon). */
  redisUrl: process.env.REDIS_URL,
};

export const databaseUrl = required("DATABASE_URL");

/** Taille maximale du pool de connexions Prisma (par instance). */
export const databasePoolMax = requiredNumber("DATABASE_POOL_MAX", 10);

const KNOWN_WEAK_STUDENT_PASSWORD = "UPAC0000";

/**
 * Avertissements de configuration en production.
 * Ne bloque pas le démarrage (le build CI n'a pas toujours l'env runtime),
 * mais signale très visiblement ce qui doit être corrigé avant une mise en prod.
 */
if (isProduction) {
  if (!env.siteUrl.startsWith("https://")) {
    logger.warn("NEXT_PUBLIC_SITE_URL doit être une URL https en production.", { siteUrl: env.siteUrl });
  }
  if (!env.cronSecret) {
    logger.warn("CRON_SECRET absent : les routes /api/cron/* resteront désactivées (503).");
  }
  if (process.env.DEFAULT_STUDENT_PASSWORD === KNOWN_WEAK_STUDENT_PASSWORD) {
    logger.warn("DEFAULT_STUDENT_PASSWORD utilise encore la valeur par défaut : à changer avant la production.");
  }
  if (!env.redisUrl) {
    logger.warn(
      "REDIS_URL absent : rate-limit en mémoire. En production multi-instances, configurer Redis pour un quota partagé."
    );
  }
}
