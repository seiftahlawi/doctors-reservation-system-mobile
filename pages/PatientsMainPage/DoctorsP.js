
import React from 'react'
import { Component } from 'react'
import AppHeaderx from './Component/AppHeader'
import { View,Text,TouchableOpacity,ScrollView,StyleSheet,Image,TextInput} from 'react-native';
import {  Button} from 'native-base';
import FeadBack from './FeadBack'
class DoctorsP extends Component{
    constructor(props){
        super(props)
        this.state={
            info:{},
            img:"http://10.0.2.2:5000/default-user.png",
            FirstName:'',
            LastName:'',
            Email:'',
            PhoneNumber:'',
            specialty:"specialty",
            Password:'',
            fileUrl:{},
            About:'flex',
            List:'none',
            feedback:'',

          
        }
    }


    
      componentDidMount(){

        fetch("http://10.0.2.2:5000/DoctorMen",{
            method:'POST',
            headers:new Headers({'Content-Type':'application/x-www-form-urlencoded'}),
            body:'JobNumber='+this.props.navigation.state.params.userid
          }).then(response => response.json())            
           .then(data=>{this.setState({info:data,FirstName:data.FirstName,LastName:data.LastName,Email:data.Email,PhoneNumber:data.PhoneNumber,specialty:data.specialty,Password:data.Password,img:data.img})})
          .catch(err => { console.log(err) })
            
        
       }
     

       
       addcomment=( e)=>{
        e.preventDefault()
        fetch("http://10.0.2.2/DoctorsReservationSystemPHPserver/addComment.php",{
            method:'POST',
            headers:new Headers({'Content-Type':'application/x-www-form-urlencoded'}),
            body:'Dremail='+this.state.info.Email+'&comment='+this.state.comment+'&pemail='+this.props.navigation.state.params.patient.user
          })
          .catch(err => { console.log(err) })
        
       }



   
    render(){
      this.state.img=this.state.img.replace("localhost", "10.0.2.2")
      
            







    return(
      <ScrollView>
<AppHeaderx nav={this.props}/>

          <View style={{width:'100%', alignItems: 'center',}}>
       
               <Image  style={{width:250,height:250,margin:'5%',borderRadius:10}} source={{uri:this.state.img}} />
                 
             </View>
             <View>
               <View>
               <Text style={{textAlign:'center',margin:20,fontSize:20,fontWeight:'bold'  }}> {this.state.FirstName+' '+this.state.LastName}</Text>
               <Text style={{textAlign:'center',margin:5,fontSize:16,fontWeight:'bold',color:'blue'  }}> {this.state.specialty}</Text>
               <Text style={{textAlign:'center',margin:20,fontSize:16 }}>Experience : {this.state.info.Experience}</Text>
               </View>
             <View >
                            <Text style={{textAlign:'center',margin:20,fontSize:20,fontWeight:'bold'  }}>To communicate</Text>
                            <View style={ {display:'flex',flexDirection:'row',width:'100%',padding:5,justifyContent:'space-around'}}>
                            <TouchableOpacity ><Text style={{color:'blue'  }}>Facebook</Text></TouchableOpacity>
                            <TouchableOpacity><Text style={{color:'blue'  }}>whatsapp</Text></TouchableOpacity>
                            <TouchableOpacity><Text style={{color:'blue'  }}>skype</Text></TouchableOpacity>
                            </View>
                        </View>
             </View>

             <View>
             <View >
             


                            <View style={ {display:'flex',flexDirection:'column',borderWidth:1,borderColor:'black' ,width:'100%',marginTop:15,backgroundColor:'rgba(111, 130, 213, 0.8)'}}>
                            <TouchableOpacity onPress={()=>this.setState( {About:'flex',List:'none'})} style={{width:'100%',padding:8,borderColor:'balck',borderWidth:1}} ><Text style={{color:'#fff',textAlign:'center',  }} >About</Text></TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.setState( {About:'none',List:'flex'})} style={{width:'100%',padding:8,borderColor:'balck',borderWidth:1}} ><Text style={{color:'#fff',textAlign:'center',  }} >feedback</Text></TouchableOpacity>
                            
                            </View>
              </View>

                
          
            <View style={{width:'100%',marginTop:'10%' ,display:this.state.About}}>
           
                                        <View style={{display:'flex',flexDirection:'row',marginLeft:7  }}>
                                            <View >
                                                <Text style={styles.textin}> Email :</Text>
                                            </View>
                                            <View >
                                              <Text style={{fontSize:20,marginLeft:7}}>{this.state.Email} </Text> 
                                            </View>
                                        </View>


               


                                        <View style={{display:'flex',flexDirection:'row',marginTop:10,marginLeft:7  }}>
                                            <View >
                                                <Text style={styles.textin}>Phone Number: </Text>
                                            </View>
                                            <View >
                                             <Text style={{fontSize:20,marginLeft:7}}>{this.state.PhoneNumber} </Text>  
                                            </View>
                                        </View>

                                        <View >
                                            <View style={{marginTop:15,margin:5  }}>
                                                <Text style={styles.textin}>Location: </Text>
                                            </View>
                                            <View >
                                             <Text style={{fontSize:20,marginLeft:7}}>{this.state.info.location} </Text>  
                                            </View>
                                        </View>

      



                 
                              
            </View>
          
          
        
            <View style={{display:this.state.List}}>
                <View>
                <FeadBack dr={this.state.Email} pt={this.props.navigation.state.params.patient}/>
                </View>
               

                       <View >

                       <TextInput
    multiline={true}
    numberOfLines={2}
    style={{borderColor:'black',borderWidth:2,margin:"5%"}}
    onChangeText={(text) => this.setState({feedback:text})}
    value={this.state.feedback}/>
     



                       </View>
  
                       <Button block style={{margin:"5%"}} onPress={this.addcomment}><Text style={{color:'#fff'}}>Send</Text></Button>
            </View>
          
      
        
             </View>

            < View style={{width:'100%',height:30}} >
                                               
                                            </View>
      </ScrollView>
    )

}
}
const styles = StyleSheet.create({

 
textin:{
textAlign:'center',
fontWeight:'bold',
fontSize:20,
color:'blue'
},


})

export default DoctorsP