import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View, Switch } from "react-native";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [userToken, setUserToken] = useState();
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      const token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
      setUserToken(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
  };

  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

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
      {isEnabled && <Text>Ok I'll remind youaaa</Text>}
      {!isEnabled && <Text>Fine I won't remind you</Text>}

      <View style={{ borderWidth: 2, padding: 10, margin: 30 }}>
        <Text style={{ fontSize: 18, marginTop: 20 }}>
          Type something below
        </Text>
        <TextInput style={styles.input} defaultValue="You can type in me man" />
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
