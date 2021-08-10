import React from 'react'
import { Component } from 'react';

import Cards from './Card'

import { View,Text,TouchableOpacity,StyleSheet,ScrollView} from 'react-native';

class Patients extends Component {


  constructor(props){
    super(props)
    this.state={
info:[],
isprofile:false,
ishome:true

    }
  }



  componentDidMount(){
   fetch("http://10.0.2.2:5000/PatientRetriveing")
    .then(response =>response.json())            
     .then(data=>{ this.setState({info:data})})
    .catch(err => { console.log(err) })
    
  }

  componentDidUpdate(){
    fetch("http://10.0.2.2:5000/PatientRetriveing")
    .then(response =>response.json())            
     .then(data=>{ this.setState({info:data})})
    .catch(err => { console.log(err) })
  
  }

    render(){


      const Doctors = this.state.info.map((doctors,index)=><Cards doctor={doctors} drdata={this.props.drdata} key={index} />)
      
      
           


return(


 
              
  <ScrollView style={{display:'flex',flexDirection:"column",backgroundColor:'#fff'}}>
  {Doctors}
  <View style={{height:100,width:'100%'}}>

  </View>
  </ScrollView>
  


)

}

             
            
      
          
        
       
          
        
      
 
        
    
}



export default Patients