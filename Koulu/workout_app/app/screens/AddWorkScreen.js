import { React, useState, useContext } from "react";
import { View, StatusBar } from "react-native";
import {
  Text,
  Button,
  SegmentedButtons,
  TextInput,
  Portal,
  Modal,
} from "react-native-paper";
import { Calendar } from "react-native-calendars";
import { colors } from "../styles/mainStyles";
import { addWorkStyle } from "../styles/addWorkStyle";
import { WorkoutLogger } from "../components/WorkoutLogger";
import { sportButtons } from "../components/SegmentedList";

const currentDate = new Date().toLocaleDateString();

export default function AddWorkoutScreen() {
  const [sportValue, setsportValue] = useState("Running");
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [icon, setIcon] = useState('run');
  const [date, setDate] = useState(currentDate);
  const [modal, setModal] = useState(false);


  function formatDate(date) {
    let inputDate = new Date(date);
    let  formattedDate = `${inputDate.getDate().toString().padStart(2, "0")}.${(
      inputDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}.${inputDate.getFullYear()}`;

    setDate(formattedDate);
  }

  function buttonHandler () {
      if (sportValue === 'Running') {
        setIcon('run');
      } else if (sportValue === 'Cycling') {
        setIcon('bike');
      } else if (sportValue === 'Swimming') {
        setIcon('swim');
      } else if (sportValue === 'Skiing') {
        setIcon('ski');
      }
      console.log(icon);
    }

  return (
    <View style={addWorkStyle.scaffold}>
      <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
      <View style={addWorkStyle.workoutContainer}>
        <SegmentedButtons
          theme={{ colors: { secondaryContainer: colors.dark } }}
          value={sportValue}
          onValueChange={setsportValue}
          buttons={sportButtons}
          style={addWorkStyle.sportButton}
        />
      </View>
      <View style={addWorkStyle.container}>
        <TextInput
          label="Distance (km)"
          mode="outlined"
          value={distance.toString()}
          onChangeText={(distance) => setDistance(distance)}
          activeOutlineColor={colors.primary}
          maxLength={10}
          keyboardType="numeric"
        />
        <TextInput
          label="Duration(min)"
          mode="outlined"
          value={duration.toString()}
          onChangeText={(duration) => setDuration(duration)}
          activeOutlineColor={colors.primary}
          maxLength={10}
          keyboardType="numeric"
        />
        <Button
          mode={"elevated"}
          children={date}
          onPress={() => setModal(true)}
        />
      </View>

      <Portal>
        <Modal visible={modal} style={addWorkStyle.modal}>
          <Calendar
            onDayPress={(day) => {
              formatDate(day.dateString);
              setModal(false);
            }}
            markedDates={{
              [date]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: "orange",
              },
            }}
          />
          <Button
            mode={"elevated"}
            children={"Close"}
            onPress={() => setModal(false)}
          />
        </Modal>
      </Portal>
      <WorkoutLogger
        sportvalue={sportValue}
        distance={distance}
        duration={duration}
        date={date}
        icon={icon}
      />
    </View>
  );
}
