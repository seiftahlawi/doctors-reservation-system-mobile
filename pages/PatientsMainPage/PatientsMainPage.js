import React from 'react';
import { View,StyleSheet} from 'react-native';
import AppHeaderx from './Component/AppHeader'
import Doctors from './Doctors'
function  PatientsMainPage (props) {




const data={
  user:props.navigation.state.params.user,
  password:props.navigation.state.params.pass
}
  return (


<View >
  
<AppHeaderx nav={props}/>

  <Doctors drdata={data} nav={props} />  
         
  </View>




  );

}

const styles = StyleSheet.create({
    

  
});


export default PatientsMainPage;