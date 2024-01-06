import { StyleSheet } from "react-native";

export const aboutStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },

  header: {
    height: "25%",
    width: "100%",
  },

  bacground: {
    height: "25%",
    width: "100%",
  },

  backgroundImage: {
    flex: 1,
    width: "100%",
    borderRadius: 6,
  },

  profile: {
    position: "absolute",
    top: "18%",
    height: 100,
    width: "100%",
    alignItems: "center",
  },

  imageProfile: {
    flex: 1,
    width: 100,
    backgroundColor: "#0553",
    borderRadius: 100,
  },

  body: {
    flex: 1,
    padding: 20,
    marginTop: 30,
  },

  connect: {
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginTop: 10,
  },

  nameText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
    textAlign: "center",
    color: "#333",
  },
  roleText: {
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    textAlign: "center",
    color: "#333",
  },

  summary: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: "#333",
    marginTop: 15,
  },

  summarText: {
    fontFamily: "Poppins-Light",
    fontSize: 12,
    color: "#333",
    textAlign: "justify",
  },
});
