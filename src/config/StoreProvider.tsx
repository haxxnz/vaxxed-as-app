import { configure } from "mobx";
import { Provider as MobxProvider } from "mobx-react";
import { uiStore } from "../stores";

configure({
  useProxies: "always",
  enforceActions: "never",
  isolateGlobalState: true
});

const StoreProvider = ({ children }) => {
  return <MobxProvider uiStore={uiStore}>{children}</MobxProvider>;
};

export default StoreProvider;
