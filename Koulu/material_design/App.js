import { StyleSheet, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { MaterialScreen } from "./screens/MaterialScreen";

export default function App() {
  return (
    <PaperProvider>
      <MaterialScreen />
    </PaperProvider>
  );
}
