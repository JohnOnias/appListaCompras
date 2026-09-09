import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { cores, espaco } from '../../constants/tema';


export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <Text style={styles.titulo}>MINHA LISTA</Text>
      <Text style={styles.tituloLista}>Compras da semana</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: cores.fundo,
    height: 120,
    padding: 'auto',
    gap: espaco.md

  },
  titulo:{
    color: cores.acento,
     fontSize: 14,
    fontWeight: 400,
    fontFamily: 'Roboto'

  },
  tituloLista:{
    color: cores.texto,
    fontSize: 31,
    fontWeight: 700,
    fontFamily: 'Roboto',
    
  },

});