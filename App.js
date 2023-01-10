import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  console.log("THis is working")
  return (
    <WelcomeScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
});
