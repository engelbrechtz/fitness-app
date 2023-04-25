import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Button = ({ title }) => {
  return (
    <TouchableOpacity style={styles.button_wrapper}>
      <View style={styles.button}>
        <Text style={styles.button_text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button_wrapper: {
    padding: 10,
    backgroundColor: "black",
    width: 200,
    height: 50,
    position: "relative",
    top: 250,
    borderRadius: 50,
    textAlign: "center",
    marginLeft: 90,
  },
  button_text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    top: 3,
  },
});
