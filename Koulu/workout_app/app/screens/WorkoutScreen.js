import React, { useContext } from "react";
import { View, StatusBar, FlatList } from "react-native";
import { Text, Button, Card, Avatar } from "react-native-paper";
import { WorkoutContext} from "../components/WorkoutContext";
import WorkoutCards from "../components/WorkoutCards";
import { colors, containers } from "../styles/mainStyles";
import { workoutLogStyle } from "../styles/workoutLogStyle";
import TotalDistance from "../components/TotalDistance";

export default function WorkoutScreen({ navigation }) {
  const sportList = useContext(WorkoutContext);

  return (
    <View style={containers.scaffold}>
      <StatusBar backgroundColor={colors.dark} barStyle="light-content" />
      <Button
        children={"Clear workouts"}
        mode="contained"
        textColor={colors.light}
        buttonColor={colors.primary}
        style={{ margin: 10, width: 180 }}
        onPress={() => {
          sportList.setWorkouts([]);
        }}
      />
      <TotalDistance />
      <FlatList
        style={workoutLogStyle.flatlist}
        data={sportList.workouts}
        renderItem={({ item }) => (
          <Card
            style={workoutLogStyle.cards}
            contentStyle={workoutLogStyle.content}
          >
            <Card.Title
              titleStyle={{ color: colors.light }}
              title={[item.date, ",", " ", item.sport]}
              titleVariant="titleMedium"
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
            <WorkoutCards item={item}/>
          </Card>
        )}
      />
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
