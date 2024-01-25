import { StyleSheet } from "react-native";
import { colors } from "./mainStyles";

export const startStyles = StyleSheet.create({
  scaffold: {
    flex: 1
  },
  container: {
    flex: 0.3,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  touchable: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  touchtext: {
    fontSize: 40,
    color: "white",
  },
  
});
