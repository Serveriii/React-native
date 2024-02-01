import { StyleSheet } from "react-native";
import { colors } from "./mainStyles";

export const workoutLogStyle = StyleSheet.create({
    content: {
      backgroundColor: colors.dark,
      padding: 10,  
      borderRadius: 10,
      marginRight: 5,
    },
    cards: {
        width: "100%",
        margin: 5,
        borderRadius: 50,
    },
    text: {
        color: colors.light,
        fontSize: 16,
    },
    flatlist: {
        width: "90%",
    },
    icons: {
        backgroundColor: colors.light,
        padding: 0,
        marginRight: 10,
    }
});
