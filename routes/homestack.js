//import  {createStackNavigator } from ' react-navigation-stack';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createAppContainer} from 'react-navigation';
import ReviewForm from '../pages/forms';
import Home from '../pages/homescreen';

/*const screens={
    Home: {
        screen: Home
    },
    ReviewForm: {
        screen: ReviewForm
    },
}
const HomeStack= createStackNavigator(screens);*/

export default createAppContainer(HomeStack);