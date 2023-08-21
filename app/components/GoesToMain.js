import React from 'react';
import { ScrollView, StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import SignUpScreen from '../screens/SignUpScreen';

import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import MainScreen from '../screens/MainScreen';

const Tabs = createMaterialBottomTabNavigator();

function GoesToMain(navigation) {

    return (

                <Tabs.Navigator>
                    <Tabs.Screen name="Main" component={MainScreen}
                    options={{
                        tabBarLabel:"Stuff",
                        tabBarColor:"red"
                    }}/>

                </Tabs.Navigator>
            


            
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },

    quoteText: {
        color: "black",
        fontWeight: "bold",
        fontSize: "15",
        textAlignVertical: "center",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center"
    }
    
    

})

export default GoesToMain;