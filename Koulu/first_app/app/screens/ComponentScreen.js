import React, { useState } from 'react';
import { View } from 'react-native';    
import { components } from '../styles/components';
import { RadioButton, Text, Button, Modal, } from "react-native-paper";
import {Calendar} from "react-native-calendars";

const countries = [
    {label: 'Finland', value: 'fin'},
    {label: 'Sweden', value: 'swe'},
    {label: 'Norway', value: 'nor'},
    {label: 'Denmark', value: 'den'},
]

export default function ComponentScreen() {
    const [radio, setRadio] = useState('Finland')
    const [modal, setModal] = useState(false)
    const [selected, setSelected] = useState('2021-09-01')

  return (
    <View style={components.scaffold}>
      <Text style={components.text}>Component Screen</Text>
      <RadioButton.Group onValueChange={setRadio} value={radio}>
        {countries.map((name) => (
          <View style={components.radio}>
            <Text style={{ color: "white" }}>{name.label}</Text>
            <RadioButton value={name.value} />
          </View>
        ))}
      </RadioButton.Group>

      <Modal visible={modal} animationType="slide" style={components.modal}>
        <Text style={{ fontSize: 20, color: "white" }}>Modal window</Text>
        <Calendar
          onDayPress={(day) => {
            setSelected(day.dateString);
          }}
          style={{
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 20,
        height: 400,
      }}

        />
        <Text style={{color: 'white'}}>{selected}</Text>
        <Button onPress={() => setModal(false)} buttonColor="white">
          Close
        </Button>
      </Modal>
      <Button onPress={() => setModal(true)} buttonColor="black">
        Open
      </Button>
    </View>
  );
}