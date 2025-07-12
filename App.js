import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Todo from "./to-do/Todo";
import ColorList from "./ColorList/ColorList";
import ContactList from "./ContactList/ContactList";
import { NavigationContainer } from "@react-navigation/native";
import DynamicStack from "./navigation/DynamicStack";
// const { width, height } = Dimensions.get("window");

export default function App() {
  return (
    // <View style={{ paddingTop: 40 }}>
    //   <ScrollView horizontal pagingEnabled>
    //     <Image
    //       style={{ width: width, height: height }}
    //       source={require("./assets/1.jpg")}
    //     />
    //     <Image
    //       style={{ width: width, height: height }}
    //       source={require("./assets/2.jpg")}
    //     />
    //     <Image
    //       style={{ width: width, height: height }}
    //       source={require("./assets/3.jpg")}
    //     />
    //     <Image
    //       style={{ width: width, height: height }}
    //       source={require("./assets/4.jpg")}
    //     />
    //     <Image
    //       style={{ width: width, height: height }}
    //       source={require("./assets/5.jpg")}
    //     />
    //     <Image
    //       style={{ width: width, height: height }}
    //       source={require("./assets/6.jpg")}
    //     />
    //   </ScrollView>
    // </View>

    // <Todo />
    // <ColorList />
    // <ContactList />

    <NavigationContainer>
      <DynamicStack />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
