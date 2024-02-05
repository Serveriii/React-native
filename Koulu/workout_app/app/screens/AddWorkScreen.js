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
import { newDate } from "../components/CurrentDate";
import { WorkoutContext } from "../components/WorkoutContext";

export default function AddWorkoutScreen({ navigation }) {
  const [sportValue, setsportValue] = useState("Running");
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState(newDate);
  const [modal, setModal] = useState(false);
  const context = useContext(WorkoutContext);


  function formatDate(date) {
    let inputDate = new Date(date);
    let formattedDate = `${inputDate.getDate().toString().padStart(2)}.${(
      inputDate.getMonth() + 1
    )
      .toString()
      .padStart(1)}.${inputDate.getFullYear()}`;

    setDate(formattedDate);
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
          label={"Distance" + "(" + context.units + ")"} 
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
          icon="calendar"
          textColor={colors.dark}
          style={addWorkStyle.dateButton}
          children={date}
          onPress={() => setModal(true)}
        />
        <WorkoutLogger
          sportvalue={sportValue}
          distance={distance}
          duration={duration}
          date={date}
          // icon={icon}
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
      <Button
        children={"Back"}
        mode="contained"
        textColor={colors.light}
        buttonColor={colors.primary}
        style={{ margin: 10, width: 180 }}
        onPress={() => {
          navigation.navigate("Start");
        }}
      />
    </View>
  );
}
