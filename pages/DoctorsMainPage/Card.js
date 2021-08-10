
import React,{useState} from 'react'

import { View,TouchableOpacity,StyleSheet,Image,Button,Text } from 'react-native';


function Cards(props){

const [addPatient,setAddPatent]=useState('flex')
const [renovePatient,setRemovePatent]=useState('none')


  const addPatients=()=>{

   fetch("http://10.0.2.2:5000/AddPatientToDoctor",{
      method:'POST',
      headers:new Headers({'Content-Type':'application/x-www-form-urlencoded'}),
      body:'DrJopNumber='+props.drdata.user+'&Drpassword='+props.drdata.password+'&userId='+props.doctor.Email
    }).then()
    

  }


 const exampleImage = props.doctor.ProfileChange
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
        <View style={{display:'flex',flexDirection:'row',marginTop:5}}>
        <Button onPress={addPatients} style={{display:addPatient,backgroundColor:'rgba(80, 111, 228, 0.1)', width:'20%'}}  title="Add Patient"
  color='#506fe4'/> 
  <View style={{width:'9%'}}>

  </View>
       <Button   style={{backgroundColor:'rgba(80, 111, 228, 0.1)',width:'20%'}} title="View Patient"
  color='#43d187'/> 
  </View>
  <View style={{display:'flex',flexDirection:'row',marginTop:10}}>
<Text style={{fontWeight:'bold',fontSize:15}}>chronicDiseases:</Text> 
<Text style={{color:"#8A98AC",marginLeft:5}}>{props.doctor.diseasesValue?props.doctor.diseasesValue:'there is No chronic Diseases '}</Text> 
  </View>
  <View style={{display:'flex',flexDirection:'row',marginTop:5}}>
<Text style={{fontWeight:'bold',fontSize:15}}>is health Insurance:</Text> 
<Text style={{color:"#8A98AC",marginLeft:5}}>{props.doctor.healthInsurance}</Text> 
  </View>
  <View style={{display:'flex',flexDirection:'row',marginTop:5}}>
<Text style={{fontWeight:'bold',fontSize:15}}>Address :</Text> 
<Text style={{color:"#8A98AC",marginLeft:5}}>{props.doctor.Address}</Text> 
  </View>
  <View style={{display:'flex',flexDirection:'row',marginTop:5}}>
<Text style={{fontWeight:'bold',fontSize:15}}>Phone Number:</Text> 
<Text style={{color:"#8A98AC",marginLeft:5}}>{'+'+props.doctor.PhoneNumber}</Text> 
  </View>
        </View>
        </View>
    
          
</View>
    )
}

export default Cards