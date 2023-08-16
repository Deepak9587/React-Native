import React, {useState} from 'react';
import {Button, StyleSheet, Text, View, Image} from 'react-native';

import { addToCart } from './redux/action';
import { useDispatch } from 'react-redux';
const Product = props => {
  const items = props.item;
  const dispatch= useDispatch();
  // if (!items) {
  //   return null;
  // }    
  const handleAddToCart =(items)=>{
      // console.warn("called  ",items)
      dispatch(addToCart(items))
  }       
  return (
    <View
      style={{
        alignItems: 'center',
        borderBottomColor:"black",
        borderBottomWidth: 4,
        padding: 10,
      }}>
      <Text style={{fontSize: 24}}>{items.name}</Text>
      <Text style={{fontSize: 24}}>{items.price}</Text>
      <Text style={{fontSize: 24}}>{items.color}</Text>
      {/* <Image style={{width: 100, height: 100}} source={{uri: items.image}} /> */}
      <Image 
      source={items.image }
      style={{width: 100, height: 100}}>

      </Image> 
      <Button title="ADD TO CART" onPress={()=> handleAddToCart(items)}  ></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Product;
