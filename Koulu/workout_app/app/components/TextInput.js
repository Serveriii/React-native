import { TextInput } from "react-native-paper";
import { React, useState } from "react";

export default function TextInputComponent(props) {

    return (
      <TextInput
        label="Distance (km)"
        mode="outlined"
        value={props.distance.toString()}
        onChangeText={(distance) => setDistance(distance)}
        activeOutlineColor={colors.primary}
        maxLength={10}
        keyboardType="numeric"
      />
    );
}