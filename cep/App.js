import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import axios from 'axios';

export default class App extends React.Component {
  
  
  constructor (props){

    super(props);

      this.state = {
        endereco : ''
    }


  }

  componentDidMount() {
    axios
    .get('https://viacep.com.br/ws/06434000/json/')
    .then(response => {

      this.setState({ 
        
        endereco: response.data
      })
    })
    
    console.log(this.state.endereco.cep);

  }

  render() {
    return (
      <View>
        <Text> CEP: { this.state.endereco.cep}</Text>
        <Text> LOGRADOURO: { this.state.endereco.logradouro}</Text>
        <Text> COMPLEMENTO: { this.state.endereco.complemento}</Text>
        <Text> BAIRRO: { this.state.endereco.bairro}</Text>
        <Text> LOCALIDADE: { this.state.endereco.localidade}</Text>
        <Text> UF: { this.state.endereco.uf}</Text>
        
      </View>
    );  
  }

}
