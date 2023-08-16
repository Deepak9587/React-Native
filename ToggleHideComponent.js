import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


const HideComponents = () => {
    const[show,setShow]=useState(false)
   

    return (
        <View>
            <Text style={{fontSize:30}}>Show/Hide Components</Text>
            <Button title='show Component' onPress={()=>setShow(true)}/>

            <Button title='Hide Component' onPress={()=>setShow(false)}/>

            {
                show ? <User d={show}/> : null
            }
        </View>

    )
    
}
const User =(propss)=>{
    return(
        <View>
            <Text style={{fontSize:30}}>Show/Hide Components</Text>
           
        </View>)
}


export default HideComponents;