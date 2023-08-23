import {React, useState} from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableWithoutFeedback, Image, View, ScrollView } from "react-native";
import Input from '../components/Input';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import Ionicons from 'react-native-vector-icons/Ionicons'




function SignUpScreen(props, navigation) {

        
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [checkValidEmail, setCheckValidEmail] = useState(false);

    const handleCheckEmail = (text) => {
        let re = /\S+@\S+\.\S+/;
        let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4, 6}$/im;

        setEmail(text);

        if (re.test(text) || regex.test(text)) {
            setCheckValidEmail(false);
        }
        else {
            setCheckValidEmail(true);
        }


    }
    

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={require("../assets/logo.png")} style={styles.image}/>
            <Text style={styles.signUpText}>Sign Up</Text>
            <Input placeholder={"Enter username"} icon={require("../assets/user.png")} iconColor={"#482F2F"}/>
            <Input placeholder={"Enter email address"} icon={require("../assets/email.png")} iconColor={"#836A6A"} value={email} changeText={(text) => handleCheckEmail(text)}/>
            <View style={styles.wrongEmailView}>
                {checkValidEmail ? <Text style={styles.wrongEmailFormat}>Please enter a valid email</Text> : <Text style={styles.wrongEmailFormat}></Text>}
            </View>
            <Input placeholder={"Enter password"} icon={require("../assets/lock.png")} iconColor={"#BAB2B2"} security={true} value={pwd}/>
            <Input placeholder={"Confirm password"} icon={require("../assets/lock.png")} iconColor={"#BAB2B2"} security={true}/>
            <SignUp title={"Sign Up"}/>

        </ScrollView>

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
    },

    wrongEmailFormat: {
        color: "red",
        fontSize: "8",
        textAlign: "center"
    },

    wrongEmailView: {
        justifyContent: "flex-end"
    }

})

export default SignUpScreen;