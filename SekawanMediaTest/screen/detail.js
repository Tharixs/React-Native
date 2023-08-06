import { View, Text } from "react-native";
import { globalStyles } from "../style/globalStyle";
import { StyleSheet } from "react-native";

export default Detail = ({ route }) => {
  const { post } = route.params;
  return (
    <View style={globalStyles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
      <Text style={styles.author}>{post.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
  },
  body: {
    fontSize: 16,
    marginVertical: 10,
    fontFamily: "Poppins-Regular",
    textAlign: "justify",
  },
  author: {
    fontSize: 14,
    fontFamily: "Poppins-Light",
    textAlign: "right",
  },
});
