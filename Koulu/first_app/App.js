import { PaperProvider } from "react-native-paper";
import LayoutScreen from "./app/screens/LayoutScreen";

export default function App() {
  return (
    <PaperProvider>
      <LayoutScreen />
    </PaperProvider>
  );
}
