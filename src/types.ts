import type { VerificationResult } from "./utils/nzcp";

export type VerificationPayLoad = {
  verification: VerificationResult;
  raw: string | null;
  timestamp: Date;
};

export type Routes = {
  PermissionsScreen: undefined;
  CameraScreen: undefined;
  ResultsScreen: VerificationPayLoad;
};
