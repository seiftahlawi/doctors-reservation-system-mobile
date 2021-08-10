import React from 'react'
import { Component } from 'react';

import Card from './Card'

import { View,ScrollView} from 'react-native';

class Doctors extends Component {



  constructor(){
    super()
    this.state={
info:[],
isprofile:false,
ishome:true

    }
  }



  componentDidMount(){
   fetch("http://10.0.2.2:5000/DoctorRetriveing")
    .then(response =>response.json())            
     .then(data=>{ this.setState({info:data})})
    .catch(err => { console.log(err) })
    
  }

  componentDidUpdate(){
    fetch("http://10.0.2.2:5000/DoctorRetriveing")
    .then(response =>response.json())            
     .then(data=>{ this.setState({info:data})})
    .catch(err => { console.log(err) })
  
  }


    render(){


      const Doctors = this.state.info.map((doctors,index)=><Card doctor={doctors} nav={this.props.nav} drdata={this.props.drdata} key={index} />)
      
      
           


return(


 
              
  <ScrollView style={{display:'flex',flexDirection:"column",backgroundColor:'#fff'}}>
  {Doctors}
  <View style={{height:100,width:'100%'}}>

  </View>
  </ScrollView>
  


)

}

             
            
      
          
        
       
          
        
      
 
        
    
}



export default Doctors