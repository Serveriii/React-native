import { StyleSheet } from "react-native";


export const lightTheme = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',


}});

export const darkTheme = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',

}});

export const themes = StyleSheet.create({
    ...lightTheme



});