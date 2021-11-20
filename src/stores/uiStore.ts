import { observable, action, makeObservable } from "mobx";
import type { VerificationStatus } from "../types";
import { verificationStatus } from "./current";

class UIStore {
  verificationStatus: VerificationStatus;

  constructor() {
    makeObservable(this, {
      verificationStatus: observable,
      setVerificationStatus: action,
      resetVerificationStatus: action
    });

    this.verificationStatus = verificationStatus;
  }

  setVerificationStatus(newVerificationStatus: VerificationStatus) {
    this.verificationStatus = newVerificationStatus;
  }

  resetVerificationStatus() {
    this.verificationStatus = verificationStatus;
  }
}

const uiStore = new UIStore();

export { uiStore };
