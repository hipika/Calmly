import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WelcomeScreen from "../app/screens/WelcomeScreen";
import MainScreen from "../app/screens/MainScreen";
import SignUpScreen from "../app/screens/SignUpScreen";



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


}


const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);