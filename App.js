import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is cool!</Text>
      <TextInput
        style={{
          height: 40,
          width: 200,
          borderColor: "green",
          marginTop: 20,
          borderWidth: 3,
        }}
        defaultValue="You can type in me"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
