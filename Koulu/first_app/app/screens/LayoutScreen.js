import React from "react";
import { StatusBar, View, Image, Text } from "react-native";
import { scaffoldColor } from "../styles/styles";
import { layout } from "../styles/layoutStyles";

const Logo = require("../assets/coffee.png");

export default function LayoutScreen() {
  return (
    <View style={layout.scaffold}>
      <View style={layout.headerContainer}>
        <Image style={layout.image} source={Logo} />
        <Text style={layout.header}>WELCOME</Text>
        <Image style={layout.image} source={Logo} />
      </View>
      <View style={layout.container}>
        <Text style={layout.header}>Upper header</Text>
        <Text style={layout.header}>Middle header</Text>
        <Text style={layout.header}>Bottom header</Text>
      </View>

      <StatusBar barStyle="dark-content" backgroundColor={scaffoldColor} />
    </View>
  );
}
