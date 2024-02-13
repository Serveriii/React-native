import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions, Platform, Text } from "react-native";
import * as Location from "expo-location";
import MapView, {Marker} from "react-native-maps";

export default function Mapview() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setIsLoading(false);
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
      });
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
        setIsLoading(false);
    })();
  }, []);


    if (isLoading) {
        return (
            <Text>Loading...</Text>
        )
    }
    
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="satelliteFlyover"
      >
        <Marker
          coordinate={{ latitude: latitude, longitude: longitude }}
          title={"Täällä"}
          description={"äijjätki :D"}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
