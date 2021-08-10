import React from 'react'

import { View,ImageBackground,StyleSheet,Image} from 'react-native';
import { Container, Content, Button, Text,TouchableOpacity } from 'native-base';

function Home(props) {
  
  return (
   
   
   <View style={styles.container}>
    <ImageBackground source={require('./componant/img/drs.jpg')} style={styles.image}>
      <View style={styles.text}>
          <Image source={require('./componant/img/heart-beat-512.png')} style={styles.logo} />
          <Text style={styles.textone}>With you</Text>
  <Text style={styles.textTow}>Your doctor is in your hands</Text>
      
      </View>
    </ImageBackground>
    <View>
    <Button block light style={styles.headbtn} ><Text style={styles.textbtn} onPress={() =>{props.navigation.navigate({routeName:'Login'})}}> Sign in </Text></Button>
          <Button block  style={styles.headbtn}><Text style={styles.textbtn} onPress={() =>{props.navigation.navigate({routeName:'SignUp'})}}> Sign up </Text></Button>
    </View>
  </View>

    
  );
}
const styles = StyleSheet.create({

    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
     height:"75%",
     width:"100%",
      resizeMode: "cover",
      justifyContent: "center"
    },
    text: {
     
      backgroundColor: "rgba(111, 130, 213, 0.8),rgba(40, 180, 138, 0.8)",
      height:"100%",
      paddingTop:"60%"
    },
    textone:{
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
    },
    textTow:{
        color: "white",
        fontSize: 22,
        
        textAlign: "center",
    },
    headbtn:{
        
       
       
        margin:"3%"
    },textbtn:{
        color:'white',
    }
    ,logo:{
      position:'relative',
      left:'32%',
     bottom:'30%',
        width:"40%",
        height:"50%"
    }
  });
  
  
export default Home;