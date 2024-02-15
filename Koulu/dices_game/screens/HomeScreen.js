import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../styles/style";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gameboard from "../components/Gameboard";

export default function HomeScreen(){

    return (
      <View style={styles.container}>
        <Header />
        <Gameboard />
        <Footer />
      </View>
    );
};