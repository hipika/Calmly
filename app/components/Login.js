import React from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';



function Login({icon, title, onClick}) {


    return (
        <SafeAreaView>

            <TouchableWithoutFeedback>

                <View style={styles.loginButton}>
                <TouchableWithoutFeedback>
                    <Text style={styles.login} onPress={onClick}>{title}</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <Image style={styles.image} source={icon}/>
                </TouchableWithoutFeedback>
				
                </View>
            </TouchableWithoutFeedback>

        </SafeAreaView>

    );

}


const styles = StyleSheet.create({
    loginButton: {
        marginTop: 25,
        width: 110,
        height: 40,
        backgroundColor: "#D9D9D9",
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    login: {
        paddingTop: 12,
        paddingLeft: 10,
        textAlignVertical: "center",
        textAlign: "left",
        fontWeight: "bold"
    },
    image: {
        marginTop: -20,
        marginHorizontal: 80
    }

})


export default Login;
