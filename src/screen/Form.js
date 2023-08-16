import React, { useState } from 'react';
import {Button, StyleSheet, Text,TextInput,View } from 'react-native';

const Form =() => {

  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const [display, setDisplay] = useState(false);

  const resetForm=()=>{

    setDisplay(false)
    setName("")
    setPassword("")
    setEmail("")
  }

  return (

    <View>
      <Text style={{fontSize:30, textAlign:'center' , marginBottom:50}}>FORM component</Text>

   

      <TextInput    
        style={AppStyles.textInputBox}
        placeholder='Enter the Username: '
        onChangeText={(text)=>setName(text)}
        value={name}
      />
      <TextInput    
        style={AppStyles.textInputBox}
        placeholder='Enter the Password: '
        onChangeText={(text)=>setPassword(text)}
        value={password}
        secureTextEntry={true}
        
      />
      <TextInput    
        style={AppStyles.textInputBox}
        placeholder='Enter the Email: '
        onChangeText={(text)=>setEmail(text)}
        value={email}

      />

      <Button title='Print Details' onPress={()=>setDisplay(true)}  color='red'></Button>
      <Button title='Clear Details' onPress={resetForm}></Button>
      {
        display?
        <View>
          <Text>UserName is :  {name}</Text>
          <Text>Password is :  {password}</Text>
          <Text>Email is :  {email}</Text>

        </View>
        :null
      }


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


export default Form;