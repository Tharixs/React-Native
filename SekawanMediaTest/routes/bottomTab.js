import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import about from "../screen/about";
import HomeStack from "./homeStack";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "About") {
            iconName = focused
              ? "information-circle"
              : "information-circle-outline";
          }
          return (
            <Ionicons
              name={iconName}
              size={24}
              color={focused ? "#4682A9" : "#ccc"}
            />
          );
        },
        tabBarActiveTintColor: "#4682A9",
        tabBarInactiveTintColor: "#ccc",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="About" component={about} />
    </Tab.Navigator>
  );
};
