import React from "react";
import {
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Text, Button,  } from "react-native-paper";
import { colors } from "../styles/mainStyles";
import { startStyles } from "../styles/startScreenStyle";


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

export default function StartScreen({ navigation }) {
  return (
    <View style={startStyles.scaffold}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />

      {menuButtons.map((button, index) => (
        <TouchableOpacity
          style={startStyles.touchable}
          onPress={() => navigation.navigate(button.navigate)}
        >
          <ImageBackground source={button.image} style={startStyles.image}>
            <Text style={startStyles.touchtext}>{button.label}</Text>
          </ImageBackground>
        </TouchableOpacity>
      ))}

      {/* {menuButtons.map((button, index) => (
        <TouchableRipple
        children={<Image src={button.image}/>}
        
        />

        <Button
          key={index}
          onPress={() => navigation.navigate(button.navigate)}
          icon={button.icon}
          mode="contained"
          buttonColor={colors.dark}
          children={button.label}
          style={buttons.button}
          labelStyle={{fontSize: 20}}
        />
      ))} */}
    </View>
  );
}
