import React, { useState,useEffect } from 'react';
import {Button, StyleSheet, Text,TextInput,View } from 'react-native';

import { useSelector } from 'react-redux';
import { reducer } from './redux/reducer';
const Header =() => {
 
  const cartData=useSelector((state)=>state.reducer);
  const [cartItems,setCartItems]=useState(0)
  // console.warn(cartData)
  useEffect(()=>{
    setCartItems(cartData.length)
  },[cartData])
  return (

    <View style={{backgroundColor:'skyblue'}}>
      <Text style={{fontSize:30,textAlign:'left', marginLeft:8}}>{cartItems}</Text>
    </View>
  )

}





export default Header;