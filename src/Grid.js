import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

const ListWithFlat = () => {
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

        <View >
            <Text style={{ fontSize: 30 }}> List with Flast list Component </Text>
            <ScrollView
                horizontal={true}>
                <View style={styles.list}>
                    {
                        users.map((itemm) => <Text style={styles.item}>{itemm.firstName}</Text>)
                    }
                </View>
            </ScrollView>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}>
                <View style={styles.list}>
                    {
                        users.map((itemm) => <Text style={styles.item}>{itemm.firstName}</Text>)
                    }
                </View>
            </ScrollView>
            <ScrollView
            
               >

                <View style={[styles.list,{justifyContent:'center',flexWrap:'wrap'}]}>
                    {
                        users.map((itemm) => <Text style={styles.item}>{itemm.firstName}</Text>)
                    }
                </View>
            </ScrollView>

        </View>

    )
}

var styles = StyleSheet.create({
    list: {
        flex: 1,
        flexDirection: 'row',


    },
    item: {
        fontSize: 30,
        backgroundColor: 'red',
        margin: 10,
        width: 100,
        height: 100,
        textAlign: 'center'
    }
})


export default ListWithFlat;