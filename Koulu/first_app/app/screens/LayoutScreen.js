import React from "react";
import { StatusBar, View } from "react-native";
import { scaffoldColor } from "../../styles/styles";

export default function LayoutScreen() {
  return (
    <View style={styles.scaffold}>
      <View style={MainStyle.headerBox}>
        <Image  source={Logo} />
        <Text style={MainStyle.header}>WELCOME</Text>
        <Image  source={Logo} />
      </View>
      <View style={MainStyle.mainView}>
        <Text style={MainStyle.header}>Upper header</Text>
        <Text style={MainStyle.header}>Middle header</Text>
        <Text style={MainStyle.header}>Bottom header</Text>
      </View>

      <StatusBar style="auto" backgroundColor={scaffoldColor} />
    </View>
  );
}
