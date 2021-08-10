import React from 'react'
import { Component } from 'react'

import { View,Text,TouchableOpacity,Image} from 'react-native';


class CardAdeddPatient extends Component{
constructor(Props){
    super(Props)
    this.state={
        info:{},
        patient:this.props.patients,
        img:undefined
    }
}
componentDidMount(){

    fetch("http://10.0.2.2:5000/RetrevingPatientToDoctor",{
        method:'POST',
        headers:new Headers({'Content-Type':'application/x-www-form-urlencoded'}),
        body:'patient='+this.state.patient
      }).then(response => response.json())            
       .then(data=>{ this.setState({info:data,img:data.ProfileChange.replace("localhost","10.0.2.2")})})
      .catch(err => { console.log(err) })
        
    
   }
   //onPress={() =>{this.props.nav.navigation.navigate('DoctorProfile',{userid:this.state.info.Email})}}
render(){



    return(

                            <View style={{width:'80%',display:'flex',flexDirection:'row',marginTop:'5%'}} >
                             <Image style={{width:"27%",height:70}} source={{uri:this.state.img}}  />
                                    <TouchableOpacity  style={{textAlign:'center',fontSize:20,marginTop:'2%',marginLeft:'5%',width:"60%"}} >

                                  
                                        <Text>{`${this.state.info.FirstName}  ${this.state.info.LastName}`} </Text>
                                        <Text style={{fontSize:16}}>{this.state.info.Email}</Text>
                                    

                                    </TouchableOpacity>
                                 
                            </View>
                            
                          
        

    )
}
}

export default CardAdeddPatient