import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const ListWithMap = () => {
    const users = [
        {
            id: 1,
            firstName: "Deepak ",
            lastName: "Gurjar"
        },
        {
            id: 2,
            firstName: "harsh ",
            lastName: "Gurjar"
        },
        {
            id: 3,
            firstName: "harsh ",
            lastName: "vimal"
        },
        {
            id: 4,
            firstName: "Deepak ",
            lastName: "vimal"
        },
        {
            id: 5,
            firstName: "Ram ",
            lastName: "Gurjar"
        },
        {
            id: 6,
            firstName: "Ram ",
            lastName: "lal"
        },
        {
            id: 7,
            firstName: "Deepak ",
            lastName: "lal"
        },
        {
            id: 8,
            firstName: "Deepak ",
            lastName: "jangid"
        },
        {
            id: 9,
            firstName: "sita ",
            lastName: "jangid"
        },
        {
            id: 10,
            firstName: "Deepak ",
            lastName: "Gurjar"
        },
        {
            id: 8,
            firstName: "Deepak ",
            lastName: "jangid"
        },
        {
            id: 9,
            firstName: "sita ",
            lastName: "jangid"
        },
        {
            id: 10,
            firstName: "Deepak ",
            lastName: "Gurjar"
        },
        {
            id: 8,
            firstName: "Deepak ",
            lastName: "jangid"
        },
        {
            id: 9,
            firstName: "sita ",
            lastName: "jangid"
        },
        {
            id: 10,
            firstName: "Deepak ",
            lastName: "Gurjar"
        },

    ]

    return (
        <View style>
            <Text style={{ fontSize: 30 }}> List with Map list Component </Text>
          <ScrollView>
          {
                users.map((itemmm)=><Text style={{fontSize:50}}>{itemmm.firstName}</Text>)
            }
          </ScrollView>
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


export default ListWithMap;