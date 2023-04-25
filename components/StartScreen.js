import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Button from "./Button";

const StartScreen = () => {
  const [isLoading, isSetLoading] = useState(false);

  useEffect(() => {}, []);

  return (
    <SafeAreaView>
      {isLoading ? (
        <>
          <ActivityIndicator style={styles.loader_icon} />
        </>
      ) : (
        <>
          <ScrollView style={styles.view_wrapper}>
            <View style={styles.container}>
              <Image source={""} />
              <Text style={styles.content_text}>
                Let's achieve your desired body shape.
              </Text>
              <Button title={"Start"} />
            </View>
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
};

export default StartScreen;

const colors = [
  {
    dark_color: "#171716",
  },
  {
    fade_grey: "#F1F6F9",
  },
];

const styles = StyleSheet.create({
  loader_icon: {
    marginTop: 300,
  },
  view_wrapper: {
    marginTop: -50,
    width: 400,
    height: 800,
    backgroundColor: colors[0].dark_color,
    margin: "auto",
    position: "relative",
  },
  container: {
    backgroundColor: colors[1].fade_grey,
    width: 400,
    height: 700,
    top: 400,
    borderRadius: 20,
    position: "absolute",
  },
  content_text: {
    color: "black",
    fontSize: 50,
    fontWeight: 900,
    margin: 30,
    width: 400,
    position: "absolute",
  },
});
