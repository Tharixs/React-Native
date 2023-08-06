import { StyleSheet } from "react-native";

{
  /* Global Style */
}
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
});
{
  /* End Global Style */
}

{
  /*componentStyles */
}
export const componentStyles = StyleSheet.create({
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

{
  /* end componentStyles */
}

{
  /* detailstyle */
}

export const detailstyle = StyleSheet.create({
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

{
  /* detailstyle */
}
