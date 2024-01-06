import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function InputTodos({ submitHendler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
      ></TextInput>
      <TouchableOpacity
        onPress={() => submitHendler(text)}
        style={styles.button}
      >
        <Ionicons name="add" size={20} color="#fff" />
        <Text style={styles.btnText}> Add Todo </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 0.5,
    height: 40,
    borderRadius: 6,
    borderColor: "#D8D9DA",
    padding: 10,
    marginBottom: 10,
  },
  button: {
    flexDirection: "row",
    borderWidth: 0.5,
    alignItems: "center",
    borderRadius: 6,
    height: 40,
    justifyContent: "center",
    backgroundColor: "#3B5998",
    borderColor: "#D8D9DA",
  },
  btnText: {
    color: "#fff",
  },
});
