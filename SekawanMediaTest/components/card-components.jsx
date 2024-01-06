import { Text, TouchableOpacity } from "react-native";
import { componentStyles } from "../style/globalStyle";

export default CardComponent = ({ id, title, onPress }) => {
  return (
    <TouchableOpacity
      style={componentStyles.container}
      onPress={onPress}
      key={id}
    >
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={componentStyles.title}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
