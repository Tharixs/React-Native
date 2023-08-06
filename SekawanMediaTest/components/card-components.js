import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default CardComponent = ({ id, title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} key={id}>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 6,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
  },
  body: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#555",
  },
});
