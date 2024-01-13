
import React from 'react';
import { Animated,StyleSheet, Text, View ,ImageBackground,SafeAreaView, Platform,StatusBar, TouchableOpacity} from 'react-native';

export default class WelcomeScreen extends React.Component {
 constructor(){
   super();
   this.state={
       fadeAnim:new Animated.Value(0),
       animStatus:false
   }
 }

 fadeIn = () => {
 
  Animated.timing(this.state.fadeAnim, {
    toValue: 1,
    duration: 3000
  }).start(()=>{this.setState({animStatus:true})});
};
componentDidMount(){
  this.fadeIn()
}
start=()=>{
  this.props.navigation.navigate('Home')
}



  render(){
    console.log(Animated.Value);
   
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.androidSafeArea}/>
        
        <ImageBackground source={require('../assets/bg4.jpg')} style={styles.background}>
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              // Bind opacity to animated value
              opacity: this.state.fadeAnim
            }
          ]}
        >
          <Text style={styles.fadingText}>Welcome</Text>
        </Animated.View>
        <View>
          {
            this.state.animStatus==true?(
          
            <TouchableOpacity style={styles.startBtn} onPress={this.start}>
            <Text style={styles.startText}>Get Started</Text>
            </TouchableOpacity>
          
            )
           
            :undefined
          }
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
  startBtn:{
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    backgroundColor:'lightgray',
    width:150,
    height:50,
    borderRadius:30,
    marginTop:550

  },
  startText:{

  }
});
