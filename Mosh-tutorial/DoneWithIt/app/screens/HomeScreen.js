import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Platform
} from "react-native";

const bgImage = require("../assets/background.jpg");

export default function HomeScreen() {

    return (
      <ImageBackground source={bgImage} style={styles.image}>
            <View style={styles.container} id="scaffold">
            <StatusBar style="auto" />

            </View>
      </ImageBackground>

    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});