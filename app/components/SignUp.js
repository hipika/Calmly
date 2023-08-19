import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import NavigationContainer from '@react-navigation/native';



function SignUp({title, icon, onClick}) {

    return (
        <SafeAreaView>


            <TouchableWithoutFeedback>

                <View style={styles.signInButton}>

                    <TouchableWithoutFeedback >
                        <Text style={styles.signUp} onPress={onClick}>{title}</Text>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback>
                        <Image style={styles.image} source={icon} />
                    </TouchableWithoutFeedback>
					
                </View>
            </TouchableWithoutFeedback>





        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    signInButton: {
        marginTop: 20,
        width: 110,
        height: 40,
        backgroundColor: "#D9D9D9",
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    signUp: {
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

export default SignUp;
