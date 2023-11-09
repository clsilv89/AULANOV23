/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {React, useState} from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {

  const [value, setValue] = useState('');
  const [pokemon, setPokemon] = useState({});
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const test = () => {
    console.log('teste');
  };

  const searchByNumber = async => {
    const url = `https://pokeapi.co/api/v2/pokemon/${value}`;
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(json => setPokemon(json))
      .catch(error => console.log(error.message))
      .finally(console.log('finalizado'));
  };

  return (
    <View style={styles.sectionContainer}>
      {/* <Text style={[styles.sectionDescription, styles.sectionTitle]}>Este é apenas um texto</Text>
      <TextInput style={styles.sectionDescription}
        placeholder='Insira um texto aqui'
        value='texto inicial'
        secureTextEntry={true} />
      <Button title='botão' onPress={() => test()}/>
      <Image style={styles.imageContainer} source={{uri: 'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'}}/>
      <Image style={styles.imageContainer} source={require('./assets/images/IMG_B0CE6E82CF25-1.jpeg')}/>
      <TouchableHighlight style={styles.touchable}>
        <View>
        <Text style={styles.touchableText}>TouchableHighlight</Text>

        </View>
      </TouchableHighlight>
      <TouchableOpacity style={styles.touchable}>
        <Text style={styles.touchableText}>TouchableOpacity</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touchable} onPress={() => test()}>
        <>
          <Image style={styles.imageContainer} source={require('./assets/images/IMG_B0CE6E82CF25-1.jpeg')}/>
          <Image style={styles.imageContainer} source={require('./assets/images/IMG_B0CE6E82CF25-1.jpeg')}/>
          <Image style={styles.imageContainer} source={require('./assets/images/IMG_B0CE6E82CF25-1.jpeg')}/>
        </>
      </TouchableOpacity> */}
      {/* <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{backgroundColor: 'red', flex: 1}}></View>
        <View style={{backgroundColor: 'green', flex: 3}}></View>
        <View style={{backgroundColor: 'blue', flex: 2}}></View>
      </View>
      <View style={{flex: 2, flexDirection: 'column'}}>
        <View style={{backgroundColor: 'red', flex: 1}}></View>
        <View style={{backgroundColor: 'green', flex: 3}}></View>
        <View style={{backgroundColor: 'blue', flex: 2}}></View>
      </View>
       */}
       <Text>{pokemon.name}</Text>
       <TextInput style={styles.sectionDescription} onChangeText={(text) => setValue(text)} value={value} />
       <Image style={styles.imageContainer} source={{uri: pokemon.sprites.front_default}}/>
       <Button title='Buscar' onPress={() => searchByNumber()} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
  touchable: {
    justifyContent: 'center',
    backgroundColor: 'red',
    height: 56,
  },
  touchableText: {
    color: 'white',
  },
  imageContainer: {
    fontSize: 24,
    width: 100,
    height: 100,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    borderColor: 'black',
    borderWidth: 1
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
