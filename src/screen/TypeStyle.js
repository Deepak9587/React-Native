import React from 'react';
import {Button, StyleSheet, Text,View } from 'react-native';
import first from '../../styles.js/first';

const TypeStylee =() => {
  return (

    <View>
      {/*  inline styling */}
      <Text style={{fontSize: 30, backgroundColor:"red", color:"green"}}>Hello world</Text>

      <Text style={styless.designText}>HIII !!!!</Text>
      <Text style={styless.designText}>HIII !!!!</Text>
      <Text style={styless.designText}>HIII !!!!</Text>

      {/* external styling */}
      <Text style={first.dd}>HIII !!!!</Text>

      {/* multiple type of styling in one view */}
      <Text style={[first.dd,styless.designText,{margin:100}]}>HIII !!!!</Text>
    </View>
  
  )
}

// internal styling
const styless= StyleSheet.create({
  designText:{
    fontSize: 30, 
    backgroundColor:"yellow", 
    color:"green",
    marginBottom:10,
    padding:10,
    borderRadius:10,
    height:100,
    textAlign:'center',
    textAlignVertical:'center',
    borderColor:'red  ',
    borderWidth:2

  }
})
export default TypeStylee;