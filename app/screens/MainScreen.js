import React from 'react';
import { ScrollView, StyleSheet, Text, SafeAreaView, View } from 'react-native';


function MainScreen(navigation) {

    return (
        <SafeAreaView style={styles.container}>
            
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