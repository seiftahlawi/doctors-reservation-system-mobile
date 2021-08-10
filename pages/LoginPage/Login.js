import React from 'react';
import { View,StyleSheet} from 'react-native';
import Patients from './users/Patients'
import Doctors from './users/Doctors'
import { Component } from 'react';
import { Button, Text } from 'native-base';
class  Login extends Component {

  constructor(){
    super()
    this.state={
      patientsForm:"flex",
      DoctorsForm:"none"
    
      
    }
  }

  changeUserPatients=()=>{
    this.setState({
      patientsForm:"flex",
      DoctorsForm:"none"
   
    })
  }
  changeUserDoctors=()=>{
    this.setState({
      patientsForm:"none",
      DoctorsForm:"flex"
   
    })
  }
  
  render(){

  return (


<View  >

<View style={{flex: 1, flexDirection: 'row',margin:'10%',marginTop:'2%'}} >
      <Button onPress={this.changeUserPatients} style={styles.head}><Text style={{color:'#fff'}}>Patients portal</Text></Button>
      <Button  onPress={this.changeUserDoctors} style={styles.head}><Text style={{color:'#fff'}}>Doctors portal</Text></Button>
    </View>
  <View  style={{marginTop:'5%'}}>

    <View style={{display:this.state.patientsForm}}>
    
    <Patients nav={this.props}/>
    
    </View>
    
    <View style={{display:this.state.DoctorsForm}}  >
        
        <Doctors nav={this.props}/>
        
        </View>
</View>
  </View>


  );

}
}
const styles = StyleSheet.create({

  head:{
    margin:'2%',
    
  }

  
});


export default Login;