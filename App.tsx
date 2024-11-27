import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Pantalla, Pantalla2 } from './src/components/Pantalla';
import { BotonOperacion } from './src/components/BotonOperacion';
import { useCalculadora } from './src/hooks/useCalculadora';
import {estilos, aplicacion} from './src/estilos/index';
import botones from './src/estilos/botones';

enum Operadores {
  sumar = '+',
  restar = '-',
  multiplicar = '*',
  dividir = '/',
}

export default function App() {

  const {formula, numeroAnterior, construirNumero, clean, cambiarSigno, borrarDigito,
        resultado, realizarOperacion } = useCalculadora();

  return (
  
    <View style={aplicacion.container}>    
      <Pantalla numberOfLines={1} adjustsFontSizeToFit>{formula}</Pantalla>

      {formula === numeroAnterior ? (
        <Pantalla2 numberOfLines={1} adjustsFontSizeToFit> </Pantalla2>
      ) : (
        <Pantalla2 numberOfLines={1} adjustsFontSizeToFit>{numeroAnterior}</Pantalla2>
      )}
      
     
      <StatusBar style="auto" />

    <View style={aplicacion.fila}>
      <BotonOperacion label='C'    estilo={botones.boton} backgroundColor='#f5f7ff' color='#6e7691' onPress={clean}></BotonOperacion>
      <BotonOperacion label='+/-'  estilo={botones.boton} backgroundColor='#f5f7ff' color='#6e7691' onPress={cambiarSigno}></BotonOperacion>
      <BotonOperacion label='del'  estilo={botones.boton} backgroundColor='#f5f7ff' color='#6e7691' onPress={borrarDigito}></BotonOperacion>
      <BotonOperacion label='/'    estilo={botones.boton} backgroundColor='#ff445a' color='white' onPress={() => realizarOperacion(Operadores.dividir)}></BotonOperacion>
    </View>
    <View style={aplicacion.fila}>
      <BotonOperacion label='7' estilo={botones.boton} backgroundColor='#d8ddf0' color="#6e7691" onPress={() =>construirNumero('7')}></BotonOperacion>
      <BotonOperacion label='8' estilo={botones.boton} backgroundColor='#d8ddf0' color="#6e7691" onPress={() =>construirNumero('8')}></BotonOperacion>
      <BotonOperacion label='9' estilo={botones.boton} backgroundColor='#d8ddf0' color="#6e7691" onPress={() =>construirNumero('9')}></BotonOperacion>
      <BotonOperacion label='x' estilo={botones.boton} backgroundColor='#2388ff' color='white' onPress={() => realizarOperacion(Operadores.multiplicar)}></BotonOperacion>
    </View>
    <View style={aplicacion.fila}>
      <BotonOperacion label='4'  estilo={botones.boton} backgroundColor='#d8ddf0' color="#6e7691" onPress={() =>construirNumero('4')}></BotonOperacion>
      <BotonOperacion label='5'  estilo={botones.boton} backgroundColor='#d8ddf0' color="#6e7691"  onPress={() =>construirNumero('5')}></BotonOperacion>
      <BotonOperacion label='6'  estilo={botones.boton} backgroundColor='#d8ddf0' color="#6e7691"  onPress={() =>construirNumero('6')}></BotonOperacion>
      <BotonOperacion label='-'  estilo={botones.boton} backgroundColor='#ffc804' color='white' onPress={() => realizarOperacion(Operadores.restar)}></BotonOperacion>
    </View>
    <View style={aplicacion.fila}>
      <BotonOperacion label='1'  estilo={botones.boton}  backgroundColor='#d8ddf0' color="#6e7691"  onPress={() =>construirNumero('1')}></BotonOperacion>
      <BotonOperacion label='2'  estilo={botones.boton} backgroundColor='#d8ddf0' color="#6e7691"  onPress={() =>construirNumero('2')}></BotonOperacion>
      <BotonOperacion label='3'  estilo={botones.boton} backgroundColor='#d8ddf0' color="#6e7691"  onPress={() =>construirNumero('3')}></BotonOperacion>
      <BotonOperacion label='+'  estilo={botones.boton} backgroundColor='#63de77' color='white' onPress={() => realizarOperacion(Operadores.sumar)}></BotonOperacion>
    </View>
    <View style={aplicacion.fila}>
      <BotonOperacion label='0' estilo={botones.boton} backgroundColor='#d8ddf0' color="#6e7691" onPress={() =>construirNumero('0')}></BotonOperacion>
      <BotonOperacion label='.' estilo={botones.boton} backgroundColor='#d8ddf0' color="#6e7691i"  onPress={() =>construirNumero('.')}></BotonOperacion>
      <BotonOperacion label='=' estilo={botones.botongrande} backgroundColor='#1f2b54' color='white'  onPress={resultado}></BotonOperacion>
    </View>
    </View>


  );
}
