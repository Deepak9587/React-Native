import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// mounted means when component load first
// useEffect(()=>{})  always run when(state chagne or props change or mount the component, unmounted)
// useEffect(()=>{},[])  run, only when components mounted,(neither when state or prop change nor unmounted)
const ComponentDidUpdate = () => {
// using multiple useEffect in same component (and for State)
    const [countInc, setCountInc] = useState(0)
    const [countDec, setCountDec] = useState(0)
    const [count, setCount] = useState(33)

    // useEffect(() => {
    //     console.warn("always run")
    // })
    useEffect(() => {
        //  remember that.. at first when component will mount, then useState()
        //  run first time automatically. so zero will assign to countInc first
        setCount(countInc)
        console.warn("run on Increase button only ", { count })
    }, [countInc])
    useEffect(() => {
        setCount(countDec)
        console.warn("run on Decrease button only", { count })
        
    }, [countDec])
    console.log(count,countDec,countInc)

    return (
        <View style>
            <Text style={{ fontSize: 30 }}> Hooks( use of useEffect) </Text>
            <Text style={{ fontSize: 30 }}>{`Count is : ${count}`}</Text>
            
            <Button title='Press to Increase: ' onPress={() => { setCountInc(countInc + 1) }} />
            <Button title='Press to Decrease: ' onPress={() => {   setCountDec(countDec - 1) }} />


            {/* using useEffect by props */}
            <User  info={{countInc,countDec}}/>


        </View>

    )

    
}









// using useEffect (for props)
const User=(propsss)=>{
    useEffect(()=>{
        console.warn("run this data when increase update")
    },[propsss.countInc])   // useeffect run on changing specifice data of props

    useEffect(()=>{
        console.warn("run this data when increase update")
    },[propsss.countDec])
    return(
        <View>
            <Text style={{fontSize:20,color:'red'}}>
                User Component
                {/* ,{propsss.info.countInc}, and ,{propsss.info.countDec} */}
             </Text>
        </View>
    )
}

export default ComponentDidUpdate;