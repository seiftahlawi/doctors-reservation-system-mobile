
import React from 'react'

import { View,Image,Button,Text } from 'react-native';


function Card(props){


 const exampleImage = props.doctor.img
 const image=exampleImage.replace("localhost", "10.0.2.2")
    return(

  <View style={{padding:'3%',backgroundColor:'#ffffff',margin:'2%',shadowColor: "#000",shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.31,
shadowRadius: 9.11,

elevation: 10,}}>

      <View style={{display:'flex',flexDirection:'row'}}>
      
       <Image style={{width:250,height:200}} source={{uri:image}} style={{width:50,height:70}}/>
       <View style={{marginLeft:'5%'}}>
        <Text style={{fontWeight:'bold',fontSize:18}}>{props.doctor.FirstName+' '+ props.doctor.LastName}</Text>
        <Text>{props.doctor.Email}</Text>
     
  <View style={{display:'flex',flexDirection:'row',marginTop:10}}>
<Text style={{fontWeight:'bold',fontSize:15}}>specialty: </Text> 
<Text style={{color:"#8A98AC",marginLeft:5}}>{props.doctor.specialty}</Text> 
  </View>
  <View style={{display:'flex',flexDirection:'row',marginTop:5}}>
<Text style={{fontWeight:'bold',fontSize:15}}>Phone Number:</Text> 
<Text style={{color:"#8A98AC",marginLeft:5}}>{props.doctor.PhoneNumber}</Text> 
  </View>

  <View style={{display:'flex',flexDirection:'row',marginTop:5}}>
<Text style={{fontWeight:'bold',fontSize:15}}>Experience: </Text> 
<Text style={{color:"#8A98AC",marginLeft:5}}>{props.doctor.Experience} years</Text> 
  </View>
  <View style={{display:'flex',flexDirection:'row',marginTop:5}}>
  

  <Button onPress={() =>{props.nav.navigation.navigate('DoctorsP',{userid:props.doctor.JobNumber,patient:props.drdata})}}  style={{width:'20%'}} title="View Doctor Details"/> 
</View>
        </View>
      
        </View>
    
          
</View>
    )
}

export default Card