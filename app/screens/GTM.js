import React from 'react';
import { ScrollView, StyleSheet, Text, SafeAreaView, View, TouchableHighlightBase } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import SignUpScreen from '../screens/SignUpScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'


import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import MainScreen from '../screens/MainScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { TouchableOpacityBase } from 'react-native';
const Tabs = createMaterialBottomTabNavigator();

const Tab = [
    {route: "WelcomeScreen", label: "WelcomeScreen", type: "../assets/user.png", icon: "user", component: WelcomeScreen},
    {route: "MainScreen", label: "MainScreen", type: "../assets/lock.png", icon: "home", component: MainScreen}

]


function GTM(navigation) {

    return (

                <Tabs.Navigator shifting={true}>
                    
                    {/* <Tabs.Screen name="Main" component={MainScreen}
                    options={{
                        tabBarColor:"red"
                    }}/>
                    <Tabs.Screen name="Welcome" component={WelcomeScreen}
                    options={{
                        tabBarColor:"red"
                    }}/> */}

                    {Tab.map((_, index) => {
                        return (
                            <Tabs.Screen key={index} name = {_.route} component={_.component} 
                               
                            />
                        )
                    
                    })}

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

export default GTM;