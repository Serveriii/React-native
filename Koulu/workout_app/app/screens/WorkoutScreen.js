import React from 'react';
import { View} from 'react-native';
import { Text, Button } from "react-native-paper";
import WorkoutApp from '../../WorkoutApp';

export default function WorkoutScreen({navigation}) {

    return (
        <View>
            <Text>Workout Screen</Text>
            <Button onPress={() => navigation.navigate('Start')}>Home</Button>
        </View>
    );
}