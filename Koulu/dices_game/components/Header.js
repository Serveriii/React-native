import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/style";

export default Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Dices Game</Text>
    </View>
  )
};
