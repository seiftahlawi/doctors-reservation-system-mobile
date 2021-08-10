



import React, { Component } from 'react';
import {  View,Button} from 'native-base';
import { Text,TouchableOpacity,TextInput ,StyleSheet} from 'react-native';

 class Patients extends Component {
    constructor(props){
        super(props)
        this.state={
         Password:'',
         Email:'',
         Error:'',
         redirectToReferrer: false,
         user:undefined
   
        }
        
      }

      PatientLogIn=(e)=>{
     
        e.preventDefault()
    
          fetch("http://10.0.2.2:5000/Login",{
            method:'POST',
            headers:new Headers({'Content-Type':'application/x-www-form-urlencoded'}),
            body:'Email='+this.state.Email+'&Password='+this.state.Password
          }).then(response => response.json())            
           .then(data=>{ this.setState({Error:data.msg,redirectToReferrer:data.rd})})
           .then(()=>{if(this.state.redirectToReferrer){this.props.nav.navigation.navigate('PatientsMainPage',{user:this.state.Email,pass:this.state.Password})}} )
          .catch(err => { console.log(err) })
            
  
                   
            
      }


  render() {
    return (
 
          <View >
          <Text style={{textAlign: "center",marginTop:'11%',fontSize:30}}>Patients</Text>
               <View  >
          
               <Text style={{color:'red',margin:'5%',}}>{this.state.Error}</Text>
                 <View>
                   <TextInput placeholder="Email address"  value={this.state.Email}   onChangeText={(m)=>{this.setState({Email:m})}} style={styles.inputText}   />
                 </View>
                 <View >
                   <TextInput placeholder="Password" secureTextEntry={true} style={styles.inputText} value={this.state.password}   onChangeText={(x)=>{this.setState({Password:x})}}/>
                 </View>
                 <View>
                 <Button block  style={styles.headbtn} onPress={this.PatientLogIn}><Text style={{color:'#fff'}}> Login </Text></Button>
                 </View>
               </View>
                <TouchableOpacity style={{margin:'5%'}} onPress={() =>{this.props.nav.navigation.navigate({routeName:'SignUp'})}}><Text>Don't Have an Account? Register Now</Text></TouchableOpacity>
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
       
    margin:"3%"
}
});
export default Patients
