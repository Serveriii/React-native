import React from "react";
import {
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Text, Icon } from "react-native-paper";
import { colors } from "../styles/mainStyles";
import { startStyles } from "../styles/startScreenStyle";



export default function StartScreen({ navigation }) {
  return (
    <View style={startStyles.scaffold}>
      <StatusBar backgroundColor={colors.dark} barStyle="light-content" />

      {menuButtons.map((button, index) => (
        <TouchableOpacity
          key={index}
          style={startStyles.touchable}
          onPress={() => navigation.navigate(button.navigate)}
        >
          <ImageBackground source={button.image} style={startStyles.image}>
            <Text style={startStyles.touchtext}>{button.label}</Text>
            <Icon source={button.icon} size={50} color="white" />
          </ImageBackground>
        </TouchableOpacity>
      ))}

    </View>
  );
}

const menuButtons = [
  {
    label: "New workout",
    navigate: "AddWork",
    icon: "dumbbell",
    image: require("../assets/jogging.jpg"),
  },
  {
    label: "Your workouts",
    navigate: "Workouts",
    icon: "format-list-bulleted",
    image: require("../assets/monitor.jpg"),
  },
  {
    label: "Settings",
    navigate: "Settings",
    icon: "cog",
    image: require("../assets/cogs.jpg"),
  },
];