import React from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableWithoutFeedback, Image } from "react-native";
import Input from '../components/Input';
import SignUp from '../components/SignUp';



function SignUpScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require("../assets/logo.png")} style={styles.image}/>
            <Text style={styles.signUpText}>Sign Up</Text>
            <Input placeholder={"Enter username"} icon={require("../assets/user.png")} iconColor={"#482F2F"}/>
            <Input placeholder={"Enter email address"} icon={require("../assets/email.png")} iconColor={"#836A6A"}/>
            <Input placeholder={"Enter password"} icon={require("../assets/lock.png")} iconColor={"#BAB2B2"} security={true}/>
            <Input placeholder={"Confirm password"} icon={require("../assets/lock.png")} iconColor={"#BAB2B2"} security={true}/>
            <SignUp title={"Sign Up"}/>
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

    signUpText: {
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

export default SignUpScreen;