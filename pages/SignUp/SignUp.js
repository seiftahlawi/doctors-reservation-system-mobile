import React from 'react';
import PatientSubmit from './PatientSubmit'
import DoctorsSubmit from './DoctorsSubmit'
import { Component } from 'react';
import {  Button, Text } from 'native-base';
import { View,StyleSheet} from 'react-native';
class  SignUp extends Component {

  constructor(){
    super()
    this.state={
      patientsForm:'flex',
      doctorsForm:'none'
    }
  }

  changeUserPatients=()=>{
    this.setState({
      patientsForm:'flex',
      doctorsForm:'none'
    })
  }
  changeUserDoctors=()=>{
    this.setState({
      patientsForm:'none',
      doctorsForm:'flex'
    })
  }
  render(){


  return (


<View  >

<View style={{flex: 1, flexDirection: 'row',margin:'10%',marginTop:'2%'}} >
      <Button onPress={this.changeUserPatients} style={styles.head}><Text style={{ color:"#fff"}}>Patients portal</Text></Button>
      <Button  onPress={this.changeUserDoctors} style={styles.head}><Text style={{ color:"#fff"}}>Doctors portal</Text></Button>
    </View>
  <View >

    <View style={{display:this.state.doctorsForm}}>
    
    <DoctorsSubmit/>
    </View>
    <View style={{display:this.state.patientsForm}}>
      
      <PatientSubmit/>
      </View>
</View>
  </View>


  );
}
}
const styles = StyleSheet.create({

  head:{
    margin:'2%',
    color:"#fff"
  }

  
});

export default SignUp;
/*   */