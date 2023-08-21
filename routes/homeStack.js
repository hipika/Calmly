import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WelcomeScreen from "../app/screens/WelcomeScreen";
import MainScreen from "../app/screens/MainScreen";
import SignUpScreen from "../app/screens/SignUpScreen";
import Navigation from "../app/navigation/Navigation";


const screens = {
    Welcome: {
        screen: WelcomeScreen
    },

    SignUp: {
        screen: SignUpScreen
    },

    Main: {
        screen: MainScreen
    },

    Navigation: {
        screen: Navigation
    }


}


const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);