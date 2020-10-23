import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  View,
  Dimensions
} from "react-native";

export default function App() {

  return (
    <SafeAreaView>
      <View style={{
        backgroundColor: "dodgerblue",
        width: "100%",
        height: "30%"
      }}></View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})