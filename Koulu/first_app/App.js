import { PaperProvider } from "react-native-paper";
import HomeScreen from "./app/screens/Homescreen";

export default function App() {
  return (
    <PaperProvider>
      <HomeScreen />
    </PaperProvider>
  );
}
