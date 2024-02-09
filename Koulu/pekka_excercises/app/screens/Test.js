import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Button,
} from "react-native";

export default function Test() {
  const [isPending, setPending] = useState(true);
  const [count, setCount] = useState(0);
  const [timerId, setTimerId] = useState();

  /* EXAMPLE 1. setTimeout ------------------------------- */
  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log("This code is run after two seconds.")
  //   }, 2000);
  // }, []);
  /* ----------------------------------------------------- */

  /* EXAMPLE 2. setTimeout + ActivityIndicator ----------- */
//   useEffect(() => {
//     setTimeout(() => {
//       setPending(false);
//     }, 10000);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <ActivityIndicator size="large" animating={isPending} />
//       {!isPending && <Text style={{ fontSize: 40 }}>Time is up!</Text>}
//     </View>
//   );
  /* ----------------------------------------------------- */

  /* EXAMPLE 3. setInterval ------------------------------ */
  // useEffect(() => {
  //   setInterval(() => {
  //     setCount(prev => prev + 1);
  //   }, 1000);
  // }, []);

  // return (
  //   <View style={styles.container}>
  //     <Text style={{fontSize: 40}}>{count}</Text>
  //   </View>
  // );
  /* ----------------------------------------------------- */

  /* EXAMPLE 4. setInterval + clearInterval -------------- */
  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     setCount(prev => prev + 1);
  //   }, 1000);
  //   return () => clearInterval(timerId);
  // }, []);

  // return (
  //   <View style={styles.container}>
  //     <Text style={{fontSize: 40}}>{count}</Text>
  //   </View>
  // );
  /* ----------------------------------------------------- */

  /* EXAMPLE 5. setInterval, clearInterval manually ------ */
  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     setCount((prev) => prev + 1);
  //   }, 1000);
  //   setTimerId(timerId);
  // }, []);

  // return (
  //   <View style={styles.container}>
  //     <Text style={{ fontSize: 40 }}>{count}</Text>
  //     <Button title="Stop" onPress={() => clearInterval(timerId)} />
  //   </View>
  // );
  /* ----------------------------------------------------- */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
