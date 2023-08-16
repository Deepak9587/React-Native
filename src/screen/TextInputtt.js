import React, { useState } from 'react';
import {Button, StyleSheet, Text,TextInput,View } from 'react-native';
import first from '../../styles.js/first';

const TryTextInput =() => {
  // let variable="ddd"
  const[name,setName]=useState("")
  const[name2,setName2]=useState("")
  const[name3,setName3]=useState("")
  const [displayText, setDisplayText] = useState("");

  const handleClick = () => {
    setDisplayText(name3)
    // or 
    // setDisplayText(variable);
  };

  return (

    <View>
      <Text style={{fontSize:30}}>Input Activity(or Component)</Text>

      <Text style={{fontSize:30}}>Your Text1 is: {name} </Text>
      <Text style={{fontSize:30}}>Your Text2 is: {name2} </Text>
      <Text style={{fontSize:30}}>Your Text3 is: {displayText} </Text>


      <TextInput    
        style={AppStyles.textInputBox}
        placeholder='Enter the name: '
        onChangeText={(text)=>setName(text)}
      />

      <TextInput    
        style={AppStyles.textInputBox}
        placeholder='Enter the name2: '

        onChangeText={(text)=>setName2(text)}
        value={name2}
      />
      <TextInput    
        style={AppStyles.textInputBox}
        placeholder='Enter the name3: '
        onChangeText={(text)=>setName3(text)}
        // or 
        // onChangeText={(text)=>variable=text}
        
      />
      
      <Button title='Clear the 2nd Text ' onPress={()=>setName2('')}></Button>
      {/* i want that when i press button then the value of text3 will update, not when i am writing on inputing. (therefore we use display concept) */}
      {/* same concept , we are completing using variable, and this is the optimise way by the way */}
      <Button title='Update 3rd text after click here ' onPress={handleClick} color='red'></Button>

      
    </View>
  )
}

const AppStyles= StyleSheet.create({
  textInputBox:{
    fontSize:20,
    color:'red',
    borderWidth:2,
    borderColor:'blue',
    margin:10
  }
})


export default TryTextInput;