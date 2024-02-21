import React from "react";
import { View, Text } from "react-native";
import { generalStyles } from "../styles/generalStyles";

export default function Header(props) {
    return (
        <View style={generalStyles.header}>
        <Text style={{color: 'white'}}>{props.text}</Text>
        </View>
    );
    }
