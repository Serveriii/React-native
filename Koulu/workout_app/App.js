import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import StackScreen from "./app/components/StackScreen";
import { StatusBar } from "react-native";
import { colors } from "./app/styles/mainStyles";



export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
    </PaperProvider>
  );
}
