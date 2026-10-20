import "server-only";

import { headers } from "next/headers";

import { REQUEST_ID_HEADER } from "@/lib/request-id";

export { REQUEST_ID_HEADER };

/**
 * Identifiant de corrélation posé par `middleware.ts` sur chaque requête.
 * Disponible dans les Route Handlers et les Server Actions. Retourne
 * `undefined` hors contexte de requête (scripts, tests, cron).
 */
export function getRequestId(): string | undefined {
  try {
    return headers().get(REQUEST_ID_HEADER) ?? undefined;
  } catch {
    return undefined;
  }
}
