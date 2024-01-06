import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function TodoItems({ item, onpress }) {
  return (
    <TouchableOpacity onPress={() => onpress(item.key)}>
      <View style={styles.item}>
        <Text>{item.text}</Text>
        <FontAwesome name="remove" color={"red"} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 6,
    borderWidth: 0.5,
    borderColor: "#D8D9DA",
    borderRadius: 6,
  },
});
