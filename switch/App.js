import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  //const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "red", true: "blue" }}
        thumbColor={isEnabled ? "black" : "red"}
        //ios_backgroundColor="black"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;