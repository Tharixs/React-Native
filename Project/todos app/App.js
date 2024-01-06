import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Alert,
  View,
  FlatList,
  TouchableNativeFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";
import Header from "./components/header";
import TodoItems from "./components/todoItems";
import InputTodos from "./components/inputTodos";

export default function App() {
  const [todos, setTodos] = useState([
    {
      text: "buy coffee",
      key: "1",
    },
    {
      text: "create an app",
      key: "2",
    },
    {
      text: "play on the switch",
      key: "3",
    },
  ]);

  const onPress = (key) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todos) => todos.key != key);
    });
  };

  const submitHendler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("Opps...", "Todos Must Over 3 Char", [
        { text: "Understood", onPress: () => console.log("Close alert") },
      ]);
    }
  };

  return (
    <TouchableNativeFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.conten}>
          <InputTodos submitHendler={submitHendler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItems item={item} onpress={onPress} />
              )}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  conten: {
    flex: 1,
    padding: 20,
  },
  list: {
    flex: 1,
    marginVertical: 20,
  },
});
