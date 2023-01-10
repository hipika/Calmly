import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

function MainScreen(props) {
    return (
        <ScrollView style={styles.container}>
            
            <Text>Welcome to Calmly</Text>


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red"
    }



})

export default MainScreen;