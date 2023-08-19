import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import SignUpScreen from './app/screens/SignUpScreen';
import MainScreen from './app/screens/MainScreen';
// import Navigator from "./routes/homeStack"; 
// import { StackActions } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from "./app/navigation/Navigation";

const Stack = createNativeStackNavigator();


export default function App() {
  console.log("THis is working")
  return (
    //<WelcomeScreen/>
    // <SignUpScreen/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="SignUp"
          component={SignUpScreen}
          options={{title: "Sign Up"}}
        />
        <Stack.Screen 
          name="Main"
          component={MainScreen}
          options={{headerShown: false}}
          
        />

      </Stack.Navigator>
      
    </NavigationContainer>
    // <SafeAreaView>
    //   <Navigation />
    // </SafeAreaView>  
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  },

    
});


