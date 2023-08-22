import React from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableWithoutFeedback, Image, Button } from "react-native";


function MainScreen({navigation}) {

    const goToWelcome = () => {
        navigation.push("Welcome")
    }
    
    return (
        <SafeAreaView>
            <Text>
                Main Screen
                <Button title="Back to Welcome" onPress={goToWelcome}/>
            </Text>
        </SafeAreaView>

    );
}


export default MainScreen;