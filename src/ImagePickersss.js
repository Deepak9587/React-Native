import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View, Image, PermissionsAndroid} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


const ImagePickersss = () => {

    const [cameraPhoto,setCameraPhoto]= useState();
    const [gallerPhoto,setGalleryPhoto]=useState();
    let options={
        saveToPhotos:true,
        mediaType:' photo',
        maxWidth: 300,
        maxHeight: 550,
    }
    const openCamera= async ()=>{

        const granted= await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,

        )
        console.log("is grandted:  ",granted);
        if(granted===PermissionsAndroid.RESULTS.GRANTED){
            const result= await launchCamera(options)
            setCameraPhoto(result.assets[0].uri)
        }
    }
    const openGallery = async ()=>{
        const result= await launchImageLibrary(options)
        setGalleryPhoto(result.assets[0].uri)
    }
  return (
    <View style={{alignItems:'center'}}>
      <View style={styles.buttons}>
        <Button color="#841584" title="Open Camera" onPress={openCamera} />
      </View>
      
      <Image  style={{   width:200, height:200}}source={{uri: cameraPhoto}}/>
      <View style={styles.buttons}>
        <Button color="#841999" title="Open Gallery"  onPress={openGallery} />
      </View>
      <Image  style={{  width:200, height:200}}source={{uri: gallerPhoto}}/>

    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    marginBottom: 50,
    marginTop: 100,
    backgroundColor: 'red',
  },
});

export default ImagePickersss;
