import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
const AsyncStorageee = () => {
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('name', 'deepak gurjar');
    } catch (e) {
      // saving error
      console.warn('eeeeeeee');
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('name');
      if (value !== null) {
        // value previously stored
        console.warn(value);
      }
    } catch (e) {
      // error reading value
      console.warn(e);
    }
  };

  return (
    <View>
      <Text style={{ fontSize: 30 }}>UsePreference Or Async Storage</Text>
      <Button title='Store Data' onPress={storeData}></Button>
      <Button title='Get Data' onPress={getData}></Button>
    </View>
  );
};

export default AsyncStorageee;
