import React from 'react';
import { ScrollView, StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import SignUpScreen from './SignUpScreen';

import { NavigationContainer } from '@react-navigation/native';

const Tabs = createMaterialBottomTabNavigator();

function MainScreen(navigation) {

    return (
        <SafeAreaView style={styles.container}>
            <Text>This is the main screen</Text>
            <Tabs.Navigator>
                <Tabs.Screen name="SignUp" component={SignUpScreen}
                options={{
                    tabBarLabel:"Stuff",
                    tabBarColor:"red"
                }}/>

            </Tabs.Navigator>
            
        </SafeAreaView>
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

export default MainScreen;