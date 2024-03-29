import { StyleSheet } from "react-native";
import { colors } from "./mainStyles";

export const workoutLogStyle = StyleSheet.create({
    content: {
      backgroundColor: colors.dark,
      padding: 0,  
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
        fontSize: 14,
    },
    flatlist: {
        width: "90%",
    },
    icons: {
        backgroundColor: colors.light,
        padding: 0,
        marginRight: 10,
    },
    home: {
        width: "100%",
        marginBottom: 5,
    },
});
