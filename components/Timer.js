
import React from 'react';
import { Animated,StyleSheet, Text, View ,ImageBackground,SafeAreaView, Platform,StatusBar, TouchableOpacity, TextInput} from 'react-native';

export default class Timer extends React.Component {
 constructor(props){
   super(props);
   this.state={
       timers:0,
       minutes:0,
       seconds:0,
       start:false
   }
  
   
 }

 render(){
    return(
        <View style={styles.container}>
        
        
         
               
        </View>
        
    )
  
 
}
}
const styles = StyleSheet.create({
  container: {
  
   

  },
  background:{
    flex:1,
    resizeMode:'cover',
   
  },
  androidSafeArea:{
    marginTop:Platform.OS=='android'?StatusBar.currentHeight:0
  },
  createBtn:{
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    backgroundColor:'lightgray',
    width:150,
    height:50,
    borderRadius:30,
    marginTop:Platform.OS=='android'?StatusBar.currentHeight+100:100

  },
  

  
});
