import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Platform,
  Image,
} from "react-native";

const bgImage = require("../assets/background.jpg");

export default function HomeScreen() {

    return (
      <ImageBackground source={bgImage} style={styles.image}>
            <View style={styles.scaffold} id="scaffold">
            <StatusBar style="auto" />
              <View style={[styles.container, {marginBottom: 350}]}>
              <Image source={require('../assets/logo-red.png')} resizeMode="contain" style={{width: 100, height: 100}} />
              <Text>Sell What You Don't Need</Text>
              </View>

              <Pressable style={[styles.accountButton, {backgroundColor: '#fc5c65'}]} onPress={() => console.log("Login")}>
                <Text style={{fontSize: 20, fontFamily: 'sans-serif-condensed'}}>Login</Text>
              </Pressable>
              <Pressable style={[styles.accountButton, {backgroundColor: '#4ECDC4'}]} onPress={() => console.log("Register")}>
                <Text style={{fontSize: 20, fontFamily: 'sans-serif-condensed'}}>Register</Text>
              </Pressable>

            </View> 
      </ImageBackground>

    )
}

const styles = StyleSheet.create({
  scaffold: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    flex: 1,
    resizeMode: "cover"
  },
  accountButton: {
    width: "100%",
    height: 60,
    alignItems: "center",
    paddingTop: 15,
  }

});