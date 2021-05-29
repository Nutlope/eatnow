import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Switch } from "react-native";

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>EatNow</Text>
      <View style={styles.side}>
        <Text style={{ fontSize: 22 }}>Remind me to eat</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      {isEnabled && <Text>Ok I'll remind you</Text>}
      {!isEnabled && <Text>Fine I won't remind you</Text>}

      <View style={{ borderWidth: 2, padding: 10, margin: 30 }}>
        <Text style={{ fontSize: 18, marginTop: 20 }}>
          Type something below
        </Text>
        <TextInput style={styles.input} defaultValue="You can type in me" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize: 70,
    marginBottom: 150,
    marginTop: 50,
  },
  input: {
    height: 40,
    width: 250,
    borderColor: "green",
    marginTop: 20,
    borderWidth: 2,
  },
  side: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
