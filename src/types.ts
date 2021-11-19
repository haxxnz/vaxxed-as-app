import type { VerificationResult } from "./utils/nzcp";

export type VerificationPayload = {
  verification: VerificationResult;
  raw: string | null;
  timestamp: Date;
};

export type Routes = {
  PermissionsScreen: undefined;
  CameraScreen: undefined;
  ResultsScreen: VerificationPayload;
};
