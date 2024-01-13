
import React from 'react';
import { Animated,StyleSheet, Text, View ,ImageBackground,SafeAreaView, Platform,StatusBar, TouchableOpacity, ToastAndroid,TextInput} from 'react-native';
import Timer from '../components/Timer';
import { Audio } from 'expo-av';
export default class TimerScreen extends React.Component {
 constructor(){
   super();
   this.state={
       count:[],
       seconds:[],
       minutes:[],
       start:false,
       intervalId:null,
       time:[],
       activeTimer:null
     
   }
   
 }
playSound=async()=>{

  await Audio.Sound.createAsync(require('../assets/bellSound.mp3'),{shouldPlay:true})




}
 createTimer=()=>{
   if(this.state.count.length<5){
    this.setState({count:[...this.state.count,1]});
   }
   else{
       ToastAndroid.show('Only 5 timers can be created!',ToastAndroid.LONG)
   }
  
 }
 deleteTimer=()=>{
  if(this.state.count.length<1){
    ToastAndroid.show('Create atleast one timer!',ToastAndroid.LONG)
  }
  else{
    this.state.count.pop();
    this.state.minutes.pop();
    this.state.time.pop();
    this.state.seconds.pop()
    var arr1=this.state.count
    var arr2=this.state.minutes;
    var arr3=this.state.seconds;
  
    this.setState({count:arr1,minutes:arr2,seconds:arr3})
    clearInterval( this.state.intervalId)
   
  }

 
}

counter=()=>{

  var index=this.state.activeTimer
  
 if(this.state.time[index]!=0&&index<this.state.count.length){
  

   if(this.state.seconds[index]==0){
      if(this.state.minutes[index]!=0){
        var m=this.state.minutes;
        m[index]=m[index]-1;

        var s=this.state.seconds;
        s[index]=60;

        this.setState({minutes:m});
        this.setState({seconds:s});
      }
    }
    var s=this.state.seconds;
    s[index]=s[index]-1
    this.setState({seconds:s})
    
    var t=this.state.time;
    t[index]=t[index]-1
    this.setState({time:t})
    
    if(this.state.time[index]===0){
      this.playSound();
    }


  }
  else{
    if( index<this.state.count.length)
      {
        this.setState({activeTimer:this.state.activeTimer+1});
        var index=this.state.activeTimer
        
       
      }
      else{
       
       clearInterval( this.state.intervalId);
       console.log('Interval cleared!')
      }
  }

  
    
    
  

  
  
}
 startTimer=()=>{
  
  if(this.state.count.length==0){
    ToastAndroid.show('Create atleast one timer!',ToastAndroid.LONG)
  }
  var arr=this.state.time
this.state.count.map((item,index)=>{
var min=(Number(this.state.minutes[index])*60);
var sec=Number(this.state.seconds[index]);
var t=min+sec
arr[index]=t
})

 
  this.setState({
    activeTimer:0,
    time:arr
  })
  
  var id=setInterval(this.counter,1000);
  this.setState({intervalId:id})



 }

 stopTimer=()=>{
  
 if(this.state.count.length==0){
   ToastAndroid.show('Create atleast one timer!',ToastAndroid.LONG)
 }


 clearInterval( this.state.intervalId)



}
 render(){
 
    return(
      
        <View style={styles.container}>
          <SafeAreaView style={styles.androidSafeArea}/>
           <ImageBackground source={require('../assets/bg8.jpg')} style={styles.background}>
           <View style={{flexDirection:'row',justifyContent:'center'}}>

           <TouchableOpacity style={styles.createBtn} onPress={this.createTimer}>
            <Text style={styles.createText}>Create Timer</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.createBtn} onPress={this.deleteTimer}>
            <Text style={styles.createText}>Delete Timer</Text>
            </TouchableOpacity>

            </View>
           {
               this.state.count.map((item,index)=>{
                var min=this.state.minutes.toString().split(",")[index]
                var sec=this.state.seconds.toString().split(",")[index]
               
                return(
                <View style={styles.timer} key={index}>
                <TextInput placeholder="00" keyboardType="number-pad"
                style={styles.input}
                onChangeText={(text)=>{
                    var m=this.state.minutes;
                    m[index]=(text);
                    this.setState({minutes:m})
                  }}
                value={min}
                >
               
       
                </TextInput>
                <Text>:</Text>
                <TextInput placeholder="00" keyboardType="number-pad"
               onChangeText={
                 (text)=>{
                  var s=this.state.seconds;
                    s[index]=(text);
                    this.setState({seconds:s})
                  
                 }


               }
      
                style={styles.input}
                 value={sec}
               
                ></TextInput>
                
       
                </View>
                );
                })
           }

           <View style={{flexDirection:'row',justifyContent:'center'}}>
          <TouchableOpacity style={styles.startBtn} onPress={this.startTimer}>
             <Text>Start</Text>
          </TouchableOpacity>

         <TouchableOpacity style={styles.startBtn} onPress={this.stopTimer}>
             <Text>Stop</Text>
         </TouchableOpacity>

         </View>
          
           </ImageBackground>
        </View>
        
    )
  
 
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
  createBtn:{
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    backgroundColor:'lightgray',
    width:150,
    height:50,
    borderRadius:30,
    marginTop:Platform.OS=='android'?StatusBar.currentHeight:0

  },
  createText:{
      color:'black'
  },
  startBtn:{
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    backgroundColor:'lightgray',
    width:150,
    height:50,
    borderRadius:30,
    marginTop:30
  },
  
  timer:{
      flexWrap:'wrap',
      flexDirection:'row',
      borderWidth:2,
      borderColor:'white',
      marginTop:30,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'rgba(255,255,255,0.5)',
      width:200,
      height:50,
      alignSelf:'center',
     
  },
  input:{
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
      marginTop:20,
      height:30,
      
  },
  
});
