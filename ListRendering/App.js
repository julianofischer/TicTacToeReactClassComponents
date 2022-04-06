import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, Image, Button } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [dados, setDados] = useState([]);
  const [erro, setErro] = useState(false);

  //hooks -> beforeRender
  /*
  useEffect(() => {
    fetch('https://api.github.com/users/julianofischer/followers')
    .then((response) => response.json())
    .then((json) => setDados(json))
    .catch((error) => setErro(true))

    //fetch('https://api.github.cm/users/julianofischer/followers').then((response) => response.json().then((json) => setDados(json)));
  }, []);*/

  const loadDados = () => {
    fetch('https://api.github.com/users/julianofischer/followers')
    .then((response) => response.json())
    .then((json) => setDados(json))
    .catch((error) => setErro(true))
  }

  const renderMyItem = ({item}) => {
      return (
        <View style={styles.container}>
        <Text>{item.login}</Text>
        <Image style={styles.imagem}
         source={
           { uri:`${item.avatar_url}`}
          }
        />
        </View>
      );
  }
  
  if (!erro) {
    return (
      <View style={styles.container}>
        <FlatList
          data={dados}
          renderItem={renderMyItem}
          keyExtractor={item => item.id}
        />
        <Button
          onPress={loadDados}
          title="Carregar"
        />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>Deu ruim!</Text>
      </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem :{
    width: 400,
    height: 400,
  }
});
