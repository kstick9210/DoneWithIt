import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{
      backgroundColor: "#fff",
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      alignContent: "center", // only works with wrapping
    }}>
      <View style={{
        backgroundColor: "dodgerblue",
        flexBasis: 100, // can map to width or heigth
        flex: 1, // same as flexGrow
        // width: 100,
        height: 100,
      }}/>
      <View style={{
        backgroundColor: "gold",
        width: 100,
        height: 100,
      }}/>
      <View style={{
        backgroundColor: "tomato",
        width: 100,
        height: 100,
      }}/>
    </View>
  );
}