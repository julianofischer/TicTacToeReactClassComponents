import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, ImageBackground } from 'react-native';
import { Dimensions } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64,
  }

  const logo1 = {
    uri: 'https://s1.static.brasilescola.uol.com.br/be/2021/10/araras.jpg',
    width: 64,
    height: 64,
  }

  const logo2 = {
    uri: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/arara-azul.jpg',
    width: 64,
    height: 64,
  }

  const logo3 = {
    uri: 'https://s2.glbimg.com/Aa-aTPjsNJckUzLQ_PcuUf9jcds=/0x0:1365x908/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b58693ed41d04a39826739159bf600a0/internal_photos/bs/2019/f/i/5xzPoKTv6MVKsri8AmIQ/dfrtg.png',
    width: 64,
    height: 64,
  }

  const logo4 = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64,
  }

  const bg = {
    uri: 'https://s1.static.brasilescola.uol.com.br/be/2021/10/araras.jpg',
  }

  const screenWidth = Dimensions.get("window").width;

  return (
    <ImageBackground source={bg} style={styles.container}>
      <ScrollView contentContainerStyle={styles.outside}>
        <TextInput
          placeholder='Digite alguma coisa aqui.'
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />
        <Text style={styles.myText}>{text.split(" ").map((word) => word && '😛').join("\n ")}</Text>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
  },
  myText: {
    fontSize: 48,
  },
  outside: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexContainer : {
    display: 'flex',
    width:'100vw',
    height:'100vh',
  }
});
