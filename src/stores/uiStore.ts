import { observable, action, makeObservable } from "mobx";
import type { VerificationPayload } from "../types";
import { verificationStatus } from "./current";

class UIStore {
  verificationStatus: VerificationPayload;

  constructor() {
    makeObservable(this, {
      verificationStatus: observable,
      setVerificationPayload: action,
      resetVerificationPayload: action
    });

    this.verificationStatus = verificationStatus;
  }

  setVerificationPayload(newVerificationPayload: VerificationPayload) {
    this.verificationStatus = newVerificationPayload;
  }

  resetVerificationPayload() {
    this.verificationStatus = verificationStatus;
  }
}

const uiStore = new UIStore();

export { uiStore };
