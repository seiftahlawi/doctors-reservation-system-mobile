

import React, { Component } from 'react';
import {  View,Button} from 'native-base';
import { Text,TouchableOpacity,TextInput ,StyleSheet} from 'react-native';

 class Doctors extends Component {
    constructor(props){
        super(props)
        this.state={
         JopNumber:'',
         password:'',
         redirectToReferrer: false,
         Error:'',
        }


      }
      
  
      PatientLogIn=(e)=>{
     
        e.preventDefault()
         


          fetch("http://10.0.2.2:5000/LoginDoctor",{
            method:'POST',
            headers:new Headers({'Content-Type':'application/x-www-form-urlencoded'}),
            body:'JopNumber='+this.state.JopNumber+'&password='+this.state.password
          }).then(response => response.json())
           .then(data=>{ this.setState({Error: data.msg,redirectToReferrer:data.rd,info:data.data })})
           .then(()=>{if(this.state.redirectToReferrer){ this.props.nav.navigation.navigate('User',{user:this.state.info.JobNumber,pass:this.state.info.Password},)}} )
          .catch(err => { console.log(err) })
            
               
        
                 
           
            
                   
            
      }
   
    
      
    
  
  

  

     

  render() {

   
    return (
      <View>
     <Text style={{textAlign: "center",marginTop:'11%',fontSize:30,}}>Doctors</Text>
          <View  >
     
          <Text style={{color:'red',margin:'5%',}}>{this.state.Error}</Text>
            <View>
              <TextInput placeholder="Job Number"   style={styles.inputText}  value={this.state.JopNumber} onChangeText={(text)=>{this.setState({JopNumber:text})}}/>
            </View>
            <View >
              <TextInput placeholder="Password" secureTextEntry={true}  style={styles.inputText} value={this.state.password}  onChangeText={(text)=>{this.setState({password:text})}}/>
            </View>
            <View>
            <Button block  style={styles.headbtn}  onPress={this.PatientLogIn}><Text  style={{color:'#fff'}}> Login </Text></Button>
            </View>
          </View>
           <TouchableOpacity style={{margin:'5%',}} onPress={() =>{this.props.nav.navigation.navigate({routeName:'SignUp'})}}><Text>Don't Have an Account? Register Now</Text></TouchableOpacity>
          </View>
    );
  }
}
const styles = StyleSheet.create({

  inputText:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width:'79%',
    padding:'2%',
    margin:'5%',
    marginLeft:'11%'

  },
  headbtn:{ 
       
    margin:"3%",
   
}
});
export default Doctors