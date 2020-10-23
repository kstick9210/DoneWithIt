import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View, Image, SafeAreaView, Button, Alert, Platform } from 'react-native';

export default function App() {

  // const handleOnPress = () => console.log("text pressed")

  return (
    //? touchable component
    //!SafeAreaView - ios only
    // <SafeAreaView style={styles.container}>
    //   <Text onPress={handleOnPress}>I'm the React Queen</Text>
    //   <TouchableNativeFeedback onPress={() => console.log("image tapper")}>
    //     <View style={{ width: 200, height: 70, backgroundColor: "dodgerblue"}}></View>
    //   </TouchableNativeFeedback>
    //   <StatusBar style="auto" />
    // </SafeAreaView>

    //? button
    <SafeAreaView style={styles.container}>
      <Button title="Click me"
       onPress={() => Alert.alert("Title", "message", [
         {text: "yes", onPress: () => console.log("Yes")},
         {text: "no", onPress: () => console.log("no")}
         ])
         }/>
    </SafeAreaView>
  );
}

// stylesheet api validates style properties - validation won't happen with plain js object
// stylesheet api will be optimized in the future
// can extract styles into their own component then import but more conventional to define styles below the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});