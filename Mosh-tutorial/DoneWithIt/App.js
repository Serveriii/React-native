
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform
} from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {



  return (
    <View style={{
      backgroundColor: "#ffffff",
      flex: 1,
    }}>
      <View style={{
        backgroundColor: "dodgerblue",
        flex: 0.5,
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
