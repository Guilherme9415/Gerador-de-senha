import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'react-native';
import Clipboard from 'expo-clipboard';


let charset = 'abcdefgh123456789ABCDEDYSADO002908458599441569abdilgopf';

export default function App() {
  const [password, setPassword] = useState('');
  const [size, setSize] = useState(5);



  function generatePass() {
    let pass = '';
    for (let i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n))

    }
    setPassword(pass);
  }
  function copyPass(){
    Clipboard.setString(password);
    alert('Senha copiada com sucesso !!!');
  }

  return (
    <LinearGradient style={styles.color} colors={['#E63946', '#ff6b6b']}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#ce3742"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <View style={styles.container}>

        <Image
          source={require('./src/assets/logo.png')}
          style={styles.logo}
        />

        <Text style={styles.title}>{size} Caracteres </Text>
        <View style={styles.area}>

          <Slider style={{ height: 50 }}
            minimumValue={5}
            maximumValue={15}
            minimumTrackTintColor="#ff6b6b"
            maximumTrackTintColor="#ccc"
            value={size}
            onValueChange={(valor) => setSize(valor.toFixed(0))}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={generatePass}>
          <Text style={styles.buttonText}>Gerar senha</Text>
        </TouchableOpacity>

        {password !== '' && (

          <View style={styles.area}>
            <Text style={styles.pass} onLongPress={copyPass} >{password}</Text>
          </View>
        )}

      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  area: {
    marginBottom: 15,
    marginTop: 15,
    backgroundColor: '#fff',
    width: '85%',
    borderRadius: 10,
  },
  color: {
    flex: 1,

    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#fff',
    width: '85%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 20,
    color: '#212121',
    fontWeight: 'bold',

  },
  pass: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
  }

});
