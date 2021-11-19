import type { VerificationPayload } from "../../types";

const verificationStatus: VerificationPayload = {
  verification: {
    success: null,
    violates: null,
    credentialSubject: { givenName: null, familyName: null, dob: null }
  },
  raw: "",
  timestamp: null
};

export { verificationStatus };
