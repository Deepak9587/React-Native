import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

import { addToCart ,removeFromCart} from './redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { reducer } from './redux/reducer';
const Product = props => {
  const item = props.item;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.reducer);

  const [isAdded, setIsAdded] = useState(false);
  // if (!item) {
  //   return null;
  // }    
  const handleAddToCart = (item) => {
    // console.warn("called  ",item)
    dispatch(addToCart(item))
  }
  const handleRemoveFromCart= (item)=>{
    dispatch(removeFromCart(item.name))
  }
  useEffect(() => {
    // if (cartItems && cartItems.length) {
    //   cartItems.forEach((elements) => {
    //     if (elements.name === item.name) {
    //       setIsAdded(true)
    //     }
    //   })
    // }

     let result = cartItems.filter((element) => {
      return element.name === item.name
    })
    if (result.length) {
      setIsAdded(true)
    }
    else{
      setIsAdded(false) 
    }
  },[cartItems])
  return (
    <View
      style={{
        alignItems: 'center',
        borderBottomColor: "black",
        borderBottomWidth: 4,
        padding: 10,
      }}>
      <Text style={{ fontSize: 24 }}>{item.name}</Text>
      <Text style={{ fontSize: 24 }}>{item.price}</Text>
      <Text style={{ fontSize: 24 }}>{item.color}</Text>
      {/* <Image style={{width: 100, height: 100}} source={{uri: item.image}} /> */}
      <Image
        source={item.image}
        style={{ width: 100, height: 100 }}>

      </Image>
      {
        isAdded ? <Button title="REMOVE TO CART" onPress={() => handleRemoveFromCart(item)}  ></Button> : <Button title="ADD TO CART" onPress={() => handleAddToCart(item)}  ></Button>
      }

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Product;
