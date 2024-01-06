import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screen/home";
import Detail from "../screen/detail";

const stack = createNativeStackNavigator();

export default HomeStack = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#4682A9",
        },
        animation: "slide_from_right",
        headerTitleStyle: {
          fontFamily: "Poppins-SemiBold",
          fontSize: 18,
        },
        headerTintColor: "#fff",
      }}
    >
      <stack.Screen name="List Data" component={Home} />
      <stack.Screen name="Detail" component={Detail} />
    </stack.Navigator>
  );
};
