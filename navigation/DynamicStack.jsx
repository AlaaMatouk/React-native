import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/Home";
import About from "../screens/About";
import Users from "../screens/Users";
import Details from "../screens/Details";
import routes from "../utils/routes";

const Stack = createNativeStackNavigator();

const DynamicStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.home}
        component={Home}
        options={{
          headerTitle: "Home",
          headerStyle: { backgroundColor: "#EEE" },
          //   headerTitleAlign: "center",
          headerTintColor: "#333",
        }}
      />
      <Stack.Screen name={routes.about} component={About} />
      <Stack.Screen name={routes.users} component={Users} />
      <Stack.Screen name={routes.details} component={Details} />
    </Stack.Navigator>
  );
};

export default DynamicStack;
