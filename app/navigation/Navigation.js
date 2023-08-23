import React, { Profiler } from 'react';
import { View, Text, StyleSheet, Settings } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from "../screens/WelcomeScreen";
import SignUpScreen from "../screens/SignUpScreen";
import MainScreen from '../screens/MainScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ClockScreen from '../screens/ClockScreen';
import LikeScreen from '../screens/LikeScreen';
import { Title } from 'react-native-paper';
import Ionicon from '@expo/vector-icons/Ionicons'



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                position: "absolute",
                height: 90,
                borderRadius: 20,
                left: 20,
                right: 20,
                bottom: 25,
                paddingBottom: 5,
                backgroundColor: "#EBECF0"
            },
            tabBarShowLabel: false,
        
        
        }}>
            <Tab.Screen name="Main" component={MainScreen} options={{
                tabBarIcon: ({focused}) => {
                    return <Ionicon name={focused ? "home" : "home-outline"} size={25} />
                },
                header: () => {
                    return false;
                }
                
                
            }}/>

            <Tab.Screen name="Like" component={LikeScreen} options={{
                tabBarIcon: ({focused}) => {
                    return <Ionicon name={focused ? "heart" : "heart-outline"} size={25}/>
                },
                header: () => {
                    return false;
                },
            
            }}/>

            <Tab.Screen name="Clock" component={ClockScreen} options={{
                tabBarIcon: ({focused}) => {
                    return <Ionicon name={focused ? "time" : "time-outline"} size={25}/>
                },
                header: () => {
                    return false;
                }
            
            }}/>

            <Tab.Screen name="Settings" component={SettingsScreen} options={{
                tabBarIcon: ({focused}) => {
                    return <Ionicon name={focused ? "person" : "person-outline"} size={25}/>
                },
                header: () => {
                    return false;
                }
            
            }}/>

            
        </Tab.Navigator>


    );
}


const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown: false, gestureEnabled: false}}/>
                <Stack.Screen name='SignUp' component={SignUpScreen}/>
                <Stack.Screen name='HomeScreen' component={HomeScreen} options={{gestureEnabled: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1'
      }

}
)

export default Navigation;