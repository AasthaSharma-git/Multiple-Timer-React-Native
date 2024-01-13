
import React from 'react';
import { Animated,StyleSheet, Text, View ,ImageBackground,SafeAreaView, Platform,StatusBar, TouchableOpacity} from 'react-native';

export default class HomeScreen extends React.Component {
 
start=()=>{
  this.props.navigation.navigate('Timer')
}



  render(){
    console.log(Animated.Value);
   
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.androidSafeArea}/>
        
        <ImageBackground source={require('../assets/bg9.jpg')} style={styles.background}>
       
        <View style={{flexDirection:'row',flexWrap:'wrap'}}> 
         
          
            <TouchableOpacity style={styles.Btn} onPress={this.start}>
            <Text style={styles.startText}>Timer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Btn} onPress={this.start}>
            <Text style={styles.startText}>Hello</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Btn} onPress={this.start}>
            <Text style={styles.startText}>Hello</Text>
            </TouchableOpacity>
          
            
        </View>
         
          
        
        
        </ImageBackground>
      
      </View>
    );
    
  }
  
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   

  },
  background:{
    flex:1,
    resizeMode:'cover',
   
  },
  androidSafeArea:{
    marginTop:Platform.OS=='android'?StatusBar.currentHeight:0
  },
  fadingText:{
    color:'white',
    textAlign:'center',
    marginTop: Platform.OS=='android'?StatusBar.currentHeight+50:50,
    fontSize:30,
    fontFamily:'serif',
    
  },
  fadingContainer: {
    padding: 20,
   
  },
  Btn:{
    justifyContent:'center',
    alignItems:'center',
    borderWidth:4,
    margin:
    width:150,
    height:350,
    
    marginTop:50

  },
  startText:{

  }
});
