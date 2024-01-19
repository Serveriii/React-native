import { PaperProvider } from "react-native-paper";
import LayoutScreen from "./app/screens/LayoutScreen";
import ComponentScreen from "./app/screens/ComponentScreen";

export default function App() {
  return (
    <PaperProvider>
      <ComponentScreen />
    </PaperProvider>
  );
}
