import { View, Text } from "react-native";
import { detailstyle, globalStyles } from "../style/globalStyle";

export default Detail = ({ route }) => {
  const { post } = route.params;
  return (
    <View style={globalStyles.container}>
      <Text style={detailstyle.title}>{post.title}</Text>
      <Text style={detailstyle.body}>{post.body}</Text>
      <Text style={detailstyle.author}>{post.name}</Text>
    </View>
  );
};
