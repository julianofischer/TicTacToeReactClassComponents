import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, Image } from 'react-native';
import { Dimensions } from 'react-native';

export default function App() {

  const [text, setText] = useState('');
  const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64
  };

  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <TextInput style={styles.myInput}
        placeholder='Digite alguma coisa aqui'
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <ScrollView width={screenWidth}>
        <Text style={styles.myInput}>
          {text.split(' ').map((word) => word && '😀').join('\n')}
        </Text>
        <Image source={logo}/>
        <Image source={logo}/>
        <Image source={logo}/>
        <Image source={logo}/>
      </ScrollView>
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
  myInput: {
    fontSize: 42,
  },
  scrollView: {
    
  }
});
