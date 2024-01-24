import React from "react";
import { View, StatusBar } from "react-native";
import { Text, Button } from "react-native-paper";

import { colors, containers } from "../styles/mainStyles";

export default function AddWorkoutScreen() {

    return (
        <View style={containers.scaffold}>
            <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
            <Text>AddWorkScreen</Text>
        </View>
    )
}
