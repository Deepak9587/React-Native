import React, { useState } from 'react';
import {Button, StyleSheet, Text,TextInput,View ,Image,ScrollView} from 'react-native';

import Header from './Header';
import Product from './Product';
const Home =() => {
    const products=[
        {
            name:"Samsumg",
            color:'red',
            price:30000,
            image:require("../src/assets/p.jpg"),
        },
        {
            name:"Apple 14 pro",
            color:'red',
            price:120000,
            image:require("../src/assets/p.jpg"),
        },
        {
            name:"One plus 4",
            color:'red',
            price:50000,
            image:require("../src/assets/p.jpg"),
        },
        {
            name:"Apple 14 Pro Max",
            color:'red',
            price:150000,
            image:require("../src/assets/p.jpg"),
        },
        {
            name:"Apple 142",
            color:'red',
            price:120000,
            image:require("../src/assets/p.jpg"),
        },
        {
            name:"One plus 43",
            color:'red',
            price:50000,
            image:require("../src/assets/p.jpg"),
        },
        
    ]

  return (

    <View style={styles.container}>
      <Header/>
      <ScrollView >
      {
        products.map((item)=><Product item={item}/>)
      }
      </ScrollView>
    </View>
  )

}
const styles= StyleSheet.create({
    container:{
        flex:1,
    }
})




export default Home;