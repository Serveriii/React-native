import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";
import Slider from "@react-native-community/slider";
import { Container, Row, Col } from "react-native-flex-grid";

const SKILLS = ["Frontend", "Backend", "UX/UI", "Mobile", 'DevOps', 'Testing', 'Database'];
const MAX = 5;
const MIN = 0;

export default function SkillSet() {
  const [value, setValue] = useState(new Array(SKILLS.length).fill(0));
  const [average, setAverage] = useState(Number);

  const setSkillValue = (val, index) => {
    let skillValue = [...value];
    skillValue[index] = val;
    setValue(skillValue);
  };

  const calculateAverage = () => {
    let sum = value.reduce((a, b) => a + b, 0);
    let avg = sum / value.length;
    setAverage(avg);
  };

  useEffect(() => {
    calculateAverage();
  }, [value]);

  const items = [];
  for (let i = 0; i < SKILLS.length; i++) {
    items.push(
      <View key={"item" + i} style={styles.skills}>
        <Text style={styles.skill}>{SKILLS[i]}</Text>
        <Text style={styles.value}>Skill: {value[i]}</Text>
        <Container fluid>
          <Row>
            <Col>
              <Text style={styles.min}>{MIN}</Text>
            </Col>
            <Col xs='9'>
              <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={MIN}
                maximumValue={MAX}
                step={1}
                value={value[i]}
                minimumTrackTintColor="#0bf0dd"
                maximumTrackTintColor="#000000"
                onValueChange={(val) => setSkillValue(val, i)}
              />
            </Col>
            <Col>
              <Text style={styles.min}>{MAX}</Text>
            </Col>
          </Row>
        </Container>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
      <Text style={styles.header}>Skill Set</Text>
      <View>{items}</View>
      <Text style={styles.averageHeader}>Average</Text>
      <Text style={styles.averageValue}>{average}</Text>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#12547a",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  header: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
  skills: {
    alignItems: "center",
  },
  skill: {
    marginTop: 30,
    fontSize: 25,
  },
  min: {
    marginLeft: 10,
  },
  value: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 20,
  },
  averageHeader: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 25,
  },
  averageValue: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 30,
  },
});
