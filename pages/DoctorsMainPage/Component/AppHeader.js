import React from 'react';
import { View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import { Component } from 'react';
import { Icon } from 'react-native-elements'
class  AppHeader extends Component {

    constructor() {
        super()
        this.state = {
            isToggled: false
        }
    }
    toggleMenu=()=>{
     this.setState({
        isToggled:!this.state.isToggled
     })
    }
    
  render(){
const menu= <View style={{width:"100%",backgroundColor:'#e6e6e6',display:'flex',flexDirection:"column",height:'95%',position:'relative',paddingTop:'11%'} }>
    <View>
   
 <Text onPress={() =>{this.props.nav.navigation.navigate({routeName:'User'})}} style={{textAlign:'center',fontSize:30,color:"rgba(111, 130, 213, 0.8),rgba(40, 180, 138, 0.8)"}}>Five Doctors</Text>
 </View>
 <View  >


 <Icon
 style={{marginTop:'10%'}}
  name='user'
  type='font-awesome'
  color='#00aced' />


  
  <Text onPress={() =>{this.props.nav.navigation.navigate('DoctorProfile',{user:this.props.nav.navigation.state.params.user,pass:this.props.nav.navigation.state.params.pass})}} style={{textAlign:'center',fontSize:20,marginTop:'2%'}}>See Your Profile</Text>
 
 </View>
 <View>
 <Icon
 style={{marginTop:'10%'}}
  name='home'
  type='font-awesome'
  color='#00aced' />

    <Text onPress={() =>{this.props.nav.navigation.navigate({routeName:'User'})}} style={{textAlign:'center',fontSize:20,marginTop:'2%'}}>Home</Text>
    
    </View>
    <View>
        <Icon
 style={{marginTop:'10%'}}
  name='users'
  type='font-awesome'
  color='#00aced' />
          <Text onPress={() =>{this.props.nav.navigation.navigate('AboutUsD',{user:this.props.nav.navigation.state.params.user,pass:this.props.nav.navigation.state.params.pass})}} style={{textAlign:'center',fontSize:20,marginTop:'2%'}}>About us</Text>  
    </View>
<View >
<Icon
 style={{marginTop:'10%'}}
  name='sign-out'
  type='font-awesome'
  color='#00aced' />
<Text onPress={() =>{this.props.nav.navigation.navigate({routeName:'Home'})}}  style={{textAlign:'center',fontSize:20,marginTop:'5%'}} > Log Out</Text>
</View>

    
   
</View>
  return (


<View style={{backgroundColor:"rgba(111, 130, 213, 0.8),rgba(40, 180, 138, 0.8)",borderRadius:2,}}>
<TouchableOpacity  onPress = {this.toggleMenu} style ={styles.burger}>

                    <Text style={styles.burgers}></Text>
                    <Text style={styles.burgers}></Text>
                    <Text style={styles.burgers}></Text>
        
            </TouchableOpacity>
            <View style={{width:'100%', height:1,marginTop:5}}>

            </View>
            {this.state.isToggled?menu:false}

           
  </View>




  );

}
}
const styles = StyleSheet.create({
    burger: {
        marginTop:'4%',
      
        marginLeft: 18,
      
    },
    burgers: {
        width: 32,
        height: 2.4,
        marginBottom: 5.,
        backgroundColor: '#c2b8cc'
    },
    burgerMenu: {
        backgroundColor: '#fff',
        height: '40%',
        
      
        width: '100%',
        borderColor: '#c2b8cc',
        borderBottomWidth: 4
    },
  head:{
    margin:'2%',
    
  }

  
});


export default AppHeader;