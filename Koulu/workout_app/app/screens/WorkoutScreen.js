import React, { useContext } from "react";
import { View, StatusBar, FlatList } from "react-native";
import { Text, Button, Card, Avatar } from "react-native-paper";
import { WorkoutContext } from "../components/WorkoutContext";
import { colors, containers } from "../styles/mainStyles";
import { workoutLogStyle } from "../styles/workoutLogStyle";

export default function WorkoutScreen({ navigation }) {
  const sportList = useContext(WorkoutContext);

  return (
    <View style={containers.scaffold}>
      <StatusBar backgroundColor={colors.dark} barStyle="light-content" />
      <Button
        children={"Clear workouts"}
        mode="contained"
        onPress={() => {
          sportList.setWorkouts([]);
        }}
      />
      <FlatList
        style={workoutLogStyle.flatlist}
        data={sportList.workouts}
        renderItem={({ item }) => (
          <Card
            style={workoutLogStyle.cards}
            contentStyle={workoutLogStyle.content}
          >
            <Card.Title
              titleStyle={{color: colors.light}}
              title={item.sport}
              titleVariant="titleLarge"
              left={(props) => (
                <Avatar.Icon
                style={workoutLogStyle.icons}
                color={colors.dark}
                  {...props}
                  icon={
                    item.sport === "Running"
                      ? "run"
                      : item.sport === "Cycling"
                      ? "bike"
                      : item.sport === "Swimming"
                      ? "swim"
                      : item.sport === "Skiing"
                      ? "ski"
                      : "run"
                  }
                />
              )}
            />
            <Card.Content>
              <Text style={workoutLogStyle.text}>
                Distance: {item.distance} km
              </Text>
              <Text style={workoutLogStyle.text}>
                Duration: {item.duration} min
              </Text>
              <Text style={workoutLogStyle.text}>Date: {item.date}</Text>
            </Card.Content>
          </Card>
        )}
      />
      <Button onPress={() => navigation.navigate("Start")}>Home</Button>
    </View>
  );
}
