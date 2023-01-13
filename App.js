import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import SignUpScreen from './app/screens/SignUpScreen';
import Navigator from "./routes/homeStack";



export default function App() {
  console.log("THis is working")
  return (
    //<WelcomeScreen/>
    // <SignUpScreen/>
    <Navigator />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },

  
});
