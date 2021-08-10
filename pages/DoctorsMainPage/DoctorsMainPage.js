import React from 'react';
import { View,StyleSheet} from 'react-native';
import AppHeader from './Component/AppHeader'
import Patients from './Patients'
function  User (props) {




const data={
  user:props.navigation.state.params.user,
  password:props.navigation.state.params.pass
}
  return (


<View >
  
<AppHeader nav={props}/>

  <Patients drdata={data} />         
  </View>




  );

}

const styles = StyleSheet.create({
    

  
});


export default User;