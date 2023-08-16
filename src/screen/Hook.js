import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// mounted means when component load first
// useEffect(()=>{})  always run when(state chagne or props change or mount the component, unmounted)
// useEffect(()=>{},[])  run, only when components mounted,(neither when state or prop change nor unmounted)
const Hookss = () => {
   
    const[count, setCount]=useState(0)
    //  useEffect(()=>{
    //     console.warn("always run")
    //  })
     useEffect(()=>{
        console.warn("run on Mounted")
     },[])
    
    return (
        <View style>
            <Text style={{ fontSize: 30 }}> Hooks( use of useEffect) </Text>
            <Text style={{ fontSize: 30 }}> Count is : {count} </Text>


           <Button title='Press to Increase: ' onPress={()=>{setCount(count+1)}}/>
           <Button title='Press to Decrease: ' onPress={()=>{setCount(count-1) }}/>

        </View>

    )
}

const AppStyles = StyleSheet.create({
    textInputBox: {
        color: 'red',
        borderWidth: 2,
        borderColor: 'blue',
        margin: 10,
    }
})


export default Hookss;