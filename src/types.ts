import type { VerificationResult } from "@vaxxnz/nzcp";
import type { Locale } from "./data/types";

export type Localization = {
  code: Locale;
};

export type VerificationStatus = {
  verification: VerificationResult;
  raw: string | null;
  timestamp: Date;
};

export type Routes = {
  PermissionsScreen: undefined;
  CameraScreen: undefined;
  ResultsScreen: VerificationStatus;
};
