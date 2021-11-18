import "react-native-gesture-handler";
import { AppRegistry } from "react-native";
import { enableFreeze } from "react-native-screens";
import { App } from "./src/App";

enableFreeze(true);

AppRegistry.registerComponent("VaxxedAs", () => App);
