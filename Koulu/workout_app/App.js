import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import StackScreen from "./app/components/StackScreen";
import { StatusBar } from "react-native";




export default function App() {
  return (
    <PaperProvider>
      <StatusBar barStyle={"dark-content"} />
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
    </PaperProvider>
  );
}
