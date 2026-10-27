// TypeScript type definitions for onton-ventures
// Resolves: feat(dao): Live Public KPI, Organizer Retention & Quarterly Revenue Dashboard on onton.live/dao

export interface OntonventuresConfig {
  /** API key for authentication (required) */
  apiKey: string;
  /** Request timeout in milliseconds (default: 5000) */
  timeout?: number;
  /** Number of automatic retries on failure (default: 3) */
  retries?: number;
  /** Base URL for API requests */
  baseUrl?: string;
}

export interface OntonventuresResult<T = unknown> {
  data: T;
  error: null;
  metadata: { timestamp: string; requestId: string };
}

export interface OntonventuresError {
  data: null;
  error: { code: string; message: string; details?: unknown };
  metadata: { timestamp: string; requestId: string };
}

export type ApiResponse<T = unknown> =
  | OntonventuresResult<T>
  | OntonventuresError;
