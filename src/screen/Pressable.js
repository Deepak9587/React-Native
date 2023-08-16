import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, Modal, Pressable } from 'react-native';

const Pressablee = () => {

    return (
        <View style={styles.main}>
            <Pressable
                // onPress={()=>console.warn("You Press Short")}
                // onLongPress={()=>console.warn("You Pressed Long")}
                onPressIn={()=>console.warn("you are pressing right now !!")}
                onPressOut={()=>console.warn("just remove finger")}
            >
                <Text style={styles.pressableBtn}>hello</Text>
            </Pressable>
        </View>
    )


}
const styles = StyleSheet.create(
    {
        main: {
            flex: 1,
            justifyContent: 'center'
        },
        pressableBtn: {
            backgroundColor: 'blue',
            color: '#fff',
            padding: 10,
            margin: 10,
            borderRadius: 10,
            fontSize: 20,
            textAlign: 'center',
            shadowColor: 'red',
            elevation: 10
        }
    }

)



export default Pressablee;