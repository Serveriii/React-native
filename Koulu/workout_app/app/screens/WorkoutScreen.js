import React, { useContext } from "react";
import { View, StatusBar, FlatList } from "react-native";
import { Text, Button, Card } from "react-native-paper";
import { WorkoutContext } from "../components/WorkoutContext";
import { colors, containers } from "../styles/mainStyles";

export default function WorkoutScreen({ navigation }) {
  const sportList = useContext(WorkoutContext);


  return (
    <View style={containers.scaffold}>
      <StatusBar backgroundColor={colors.dark} barStyle="light-content" />
      <Text>Workouts</Text>
      <Button
        children={"Clear workouts"}
        mode="contained"
        onPress={() => {
          sportList.setWorkouts([]);
        }}
      />
      <FlatList
        data={sportList.workouts}
        renderItem={({ item }) => (
          <Card>
            <Card.Title title={item.sport} />
            <Card.Content>
              <Text>Distance: {item.distance} km</Text>
              <Text>Duration: {item.duration} min</Text>
              <Text>Date: {item.date}</Text>
            </Card.Content>
          </Card>
        )}
      />
      <Button onPress={() => navigation.navigate("Start")}>Home</Button>
    </View>
  );
}
