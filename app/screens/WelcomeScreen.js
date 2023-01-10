import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image, TouchableWithoutFeedback, TextInput, Animated, Button } from 'react-native';
import { useState, useRef } from 'react';
import Input from "../components/Input";
import Login from "../components/Login";
import SignUp from "../components/SignUp";



function WelcomeScreen(props) {

    const animation = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(animation, {toValue: 1, duration: 5000}).start();
    }

    return (

        <SafeAreaView style={styles.container}>
            <Animated.Image style={[styles.image, {opacity: animation}]} source={require("../assets/logo.png")}/>
            <Animated.Text style={[styles.loginText, {opacity: animation}]}>Welcome to Calmly</Animated.Text>
            <Input placeholder={"Enter email address"} icon={require("../assets/email.png")} iconColor={"#836A6A"}/> 
            <Input placeholder={"Enter password"} icon={require("../assets/lock.png")} iconColor={"#BAB2B2"} security={true}/>
            <Login title={"Login"} icon={require("../assets/login.png")}/>
            <SignUp title={"Sign Up"}/>


            <Button title={"Fade"} onPress={fadeIn}/>


        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },

    loginText: {
        color: "black",
        fontWeight: "bold",
        fontSize: "15",
        textAlignVertical: "center",
        textAlign: "center",
    },

    image: {
        width: 300,
        height: 300,
        resizeMode: "contain"
    }

})

export default WelcomeScreen;