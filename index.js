/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";
import KidPicker from "./src/components/KidPicker";


AppRegistry.registerComponent(appName, () => App);
