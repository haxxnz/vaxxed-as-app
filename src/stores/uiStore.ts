import { observable, action, makeObservable } from "mobx";
import type { VerificationStatus, Localization } from "../types";
import { verificationStatus, localization } from "./current";

class UIStore {
  verificationStatus: VerificationStatus;

  localization: Localization;

  constructor() {
    makeObservable(this, {
      verificationStatus: observable,
      localization: observable,
      setVerificationStatus: action,
      resetVerificationStatus: action,
      setLocalization: action
    });

    this.verificationStatus = verificationStatus;
    this.localization = localization;
  }

  setVerificationStatus(newVerificationStatus: VerificationStatus) {
    this.verificationStatus = newVerificationStatus;
  }

  resetVerificationStatus() {
    this.verificationStatus = verificationStatus;
  }

  setLocalization(newLocalization: Localization) {
    this.localization = newLocalization;
  }
}

const uiStore = new UIStore();

export { uiStore };
