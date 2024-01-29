import { StyleSheet } from "react-native";
import { colors } from "./mainStyles";

export const workoutLogStyle = StyleSheet.create({
    content: {
      backgroundColor: colors.dark,
      padding: 10,  
    },
    cards: {
        width: "100%",
        margin: 5,
    },
    text: {
        color: colors.light,
    }
});
