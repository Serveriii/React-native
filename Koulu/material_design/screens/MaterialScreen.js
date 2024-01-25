import React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles/styles";
import { useFonts } from "expo-font";

export function MaterialScreen() {
  const [loaded] = useFonts({
    Kanit: require("../assets/fonts/Kanit-Black.ttf"),
  });

  if (!loaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Material Screen</Text>
    </View>
  );
}
