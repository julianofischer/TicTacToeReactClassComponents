import { useState } from "react";
import { ActivityIndicator, StyleSheet, Switch, View } from 'react-native';

export default function App() {
  const [isEnabled, setEnabled] = useState(false);
  //const toogleSwitch = () => setEnabled(!isEnabled);

  
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          color="green"
          style={isEnabled ? styles.isVisible : styles.notVisible }
        />
        <Switch
          trackColor={{ false: "coral", true: "yellow" }}
          thumbColor={isEnabled ? "red" : "black"}
          ios_backgroundColor="black"
          value={isEnabled}
          onValueChange={setEnabled}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  isVisible: {
    visibility: 'visble',
  },
  notVisible :{
    visibility: 'hidden',
  }
});
