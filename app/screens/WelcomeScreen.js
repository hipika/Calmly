import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image, TouchableWithoutFeedback, TextInput, Animated, Button, addListener } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import Input from "../components/Input";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Navigation from '../navigation/Navigation';


function WelcomeScreen({navigation}) {



    const goToSignUp = () => {
        navigation.push("SignUp")
    }

    const goToMain = () => {
        navigation.push("HomeScreen")
    }

    const animation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: true,
        }).start();;
    }, [animation]);

    const fadeIn = () => {
        Animated.timing(animation, {toValue: 1, duration: 5000}).start();
    }

    return (

        <SafeAreaView style={styles.container}>
            <Animated.Image style={[styles.image, {opacity: animation}]} source={require("../assets/logo.png")}/>
            <Animated.Text style={[styles.loginText, {opacity: animation}]}>Welcome to Calmly</Animated.Text>
            <Input placeholder={"Enter email address"} icon={require("../assets/email.png")} iconColor={"#836A6A"}/> 
            <Input placeholder={"Enter password"} icon={require("../assets/lock.png")} iconColor={"#BAB2B2"} security={true}/>
            <Login title={"Login"} icon={require("../assets/login.png")} onClick={goToMain}/>
            <SignUp title={"Sign Up"} icon={require("../assets/login.png")} onClick={goToSignUp}/>
            

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