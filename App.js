
import React from 'react';
import { Animated,StyleSheet, Text, View ,ImageBackground,SafeAreaView, Platform,StatusBar, TouchableOpacity} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import TimerScreen from './screens/TimerScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from './screens/HomeScreen';


export default class App extends React.Component {
 render(){
   return(
     <AppContainer/>
   )
   }
}
const StackNavigator=createStackNavigator({
 
   Welcome:{screen:WelcomeScreen,navigationOptions:{
     headerShown:false
   }},
   Home:{
     screen:HomeScreen,navigationOptions:{
       headerShown:false
     }
   },
   Timer:{
     screen:TimerScreen,navigationOptions:{
       headerShown:false
     }
   }

 
})

const AppContainer=createAppContainer(StackNavigator)
