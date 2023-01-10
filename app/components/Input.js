import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { useState } from 'react';
function Input({placeholder, icon, iconColor, security}) {


    return (
        <SafeAreaView>

            <View>

                <TextInput style={styles.textBox} placeholder={placeholder} numberOfLines={1} multiline={false} secureTextEntry={security}/>


                <View style={{ width: 24, height: 24, marginTop: -37, marginHorizontal: 5, borderRadius: 2, backgroundColor: iconColor }}>
                    <Image source={icon}/>

                </View>

            </View>

            
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    email: {
        width: 230,
        height: 50,
        backgroundColor: "#D9D9D9",
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },


    textBox: {
        marginTop: 25,
        width: 230,
        height: 50,
        backgroundColor: "#D9D9D9",
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        textAlignVertical: "center",
        textAlign: "center",
        paddingLeft: 25,
        paddingRight: 10,
    },

    icon: {
        width: 24,
        height: 24,
        marginTop: -37,
        marginHorizontal: 5,
        borderRadius: 2,
        backgroundColor: "#836A6A"
    },

    emailTextBox: {
        marginTop: 25,
        width: 230,
        height: 50,
        backgroundColor: "#D9D9D9",
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        textAlignVertical: "center",
        textAlign: "center",
        paddingLeft: 25,
        paddingRight: 10,
    },

    emailIcon: {
        width: 24,
        height: 24,
        marginTop: -37,
        marginHorizontal: 5,
        borderRadius: 2
    },

    passTextBox: {
        marginTop: 30,
        width: 230,
        height: 50,
        backgroundColor: "#D9D9D9",
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        textAlignVertical: "center",
        textAlign: "center",
        paddingLeft: 25,
        paddingRight: 10
    },

    passIcon: {
        width: 24,
        height: 24,
        marginTop: -37,
        marginHorizontal: 5,
        borderRadius: 2

    }
})
export default Input;