import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, Modal } from 'react-native';


const DialogBox = () => {
    const [showButton,setShowButton]=useState(true)
    return (
        <View style={styles.main}>
            <Modal
                transparent={true}
                visible={!showButton}
                animationType='fade'
            >
                <View style={styles.centerView}>
                    <View style={styles.modalView}>
                        <Text >hello !!!!!</Text>
                        <Button title='Close modals' onPress={() => {setShowButton(!showButton)}} />
                    </View>
                </View>
            </Modal>
            <View style={styles.buttonView}>
                {
                  showButton?  <Button title='Open Modals' onPress={() =>[setShowButton(!showButton)] } /> :null
                }
                </View>
        </View>
    )


}
const styles = StyleSheet.create(
    {
        main: {
            flex: 1
        },
        buttonView: {
            flex: 1,
            justifyContent: 'flex-end'

        },
        centerView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        modalView: {
            backgroundColor: 'skyblue',
            padding: 30,
            borderRadius: 20,
            shadowColor: 'black',
            elevation: 10,
            marginVertical: 60,
            width: '90%'

        },
        modalText: {
            fontSize: 20
        }
    }

)



export default DialogBox;