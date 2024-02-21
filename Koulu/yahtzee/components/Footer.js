import React from "react";
import { View, Text } from "react-native";
import { generalStyles } from "../styles/generalStyles";

export default function Footer(props) {
  return (
    <View style={generalStyles.footer}>
      <Text style={{color: 'white'}}>{props.text}</Text>
    </View>
  );
}
