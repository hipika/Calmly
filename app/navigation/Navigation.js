import React, { Profiler } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from "../screens/WelcomeScreen";
import SignUpScreen from "../screens/SignUpScreen";
import MainScreen from '../screens/MainScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import OtherScreen from '../screens/OtherScreen';
import { Title } from 'react-native-paper';
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();



const HomeScreen = () => {
    return (
        <Tab.Navigator shifting={true} barStyle={{backgroundColor: "tomato"}}>
            <Tab.Screen name="Main" component={MainScreen}/>
            <Tab.Screen name="Other" component={OtherScreen}/>
        </Tab.Navigator>


    );
}


const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown: false}}/>
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