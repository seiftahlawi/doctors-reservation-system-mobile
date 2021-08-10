
import React from 'react'
import { Component } from 'react'
import AppHeader from './Component/AppHeader'
import { launchCamera,launchImageLibrary} from 'react-native-image-picker';
//import CardAdeddPatient from './Component/CardAdeddPatient'
import { View,Text,TouchableOpacity,ScrollView,StyleSheet,Image,TextInput} from 'react-native';
//import axios from 'axios';
import {Picker} from '@react-native-picker/picker';
import {  Button} from 'native-base';
import Map from './Map'
import CardAdeddPatient from './CardAdeddPatient'
class DoctorProfile extends Component{
    constructor(props){
        super(props)
        this.state={
            info:{},
            img:"http://10.0.2.2:5000/doctorA.jpg",
            imgs:"",
            FirstName:'',
            LastName:'',
            Email:'',
            PhoneNumber:'',
            specialty:"specialty",
            Password:'',
            fileUrl:{},
            About:'flex',
            Location:'none',
            List:'none',
            edt:false,
            dedt:"none",
            btnedit:'flex',
          
        }
    }

    cancelbtn=()=>{
        this.setState({

            FirstName:this.state.info.FirstName,
            LastName:this.state.info.LastName,
            Email:this.state.info.Email,
            PhoneNumber: this.state.info.PhoneNumber,
            specialty:this.state.info.specialty,
            Password:this.state.info.Password,
            dedt:"none",edt:false,
            btnedit:'flex',
          })
   
    }
    handeleChange=(e)=>{
        this.setState({
          [e.target.name]:e.target.value,
        })
      }
      componentDidMount(){

        fetch("http://10.0.2.2:5000/DoctorMen",{
            method:'POST',
            headers:new Headers({'Content-Type':'application/x-www-form-urlencoded'}),
            body:'JobNumber='+this.props.navigation.state.params.user
          }).then(response => response.json())            
           .then(data=>{this.setState({info:data,FirstName:data.FirstName,LastName:data.LastName,Email:data.Email,PhoneNumber:data.PhoneNumber,specialty:data.specialty,Password:data.Password,img:data.img})})
          .catch(err => { console.log(err) })
            
        
       }
     

       
      

       updateprofile=()=>{
    
      
        
        fetch("http://10.0.2.2:5000/updatedoctor",{
          method:'POST',
          headers:new Headers({'Content-Type':'application/x-www-form-urlencoded'}),
          body:'FirstName='+this.state.FirstName+'&LastName='+this.state.LastName+'&Email='+this.state.Email+'&PhoneNumber='+this.state.PhoneNumber+'&Password='+this.state.Password+'&specialty='+this.state.specialty+'&oldEmail='+this.state.info.Email+'&oldPassword='+this.state.info.Password+'&img='+this.state.img
        }).then(this.setState( {dedt:"none",edt:false, btnedit:'flex',}))
       
        
     
        
   
        
       }


   
    render(){
      this.state.img=this.state.img.replace("localhost", "10.0.2.2")
       const c=this.state.info.Patients
        if(c){
            var Patient = c.map((patient,index)=>{return(<CardAdeddPatient patients={patient}  key={index}/>)})
        }
        
              /*start imgepicker */
              const requestCameraPermission = async () => {
                if (Platform.OS === 'android') {
                  try {
                    const granted = await PermissionsAndroid.request(
                      PermissionsAndroid.PERMISSIONS.CAMERA,
                      {
                        title: 'Camera Permission',
                        message: 'App needs camera permission',
                      },
                    );
            
                    // If CAMERA Permission is granted
                    return granted === PermissionsAndroid.RESULTS.GRANTED;
                  } catch (err) {
                    console.warn(err);
                    return false;
                  }
                } else return true;
              };
            
              const requestExternalWritePermission = async () => {
                if (Platform.OS === 'android') {
                  try {
                    const granted = await PermissionsAndroid.request(
                      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                      {
                        title: 'External Storage Write Permission',
                        message: 'App needs write permission',
                      },
                    );
                    // If WRITE_EXTERNAL_STORAGE Permission is granted
                    return granted === PermissionsAndroid.RESULTS.GRANTED;
                  } catch (err) {
                    console.warn(err);
                    alert('Write permission err', err);
                  }
                  return false;
                } else return true;
              };
            
              const captureImage = async (type) => {
                let options = {
                  mediaType: type,
                  maxWidth: 300,
                  maxHeight: 550,
                  quality: 1,
                  videoQuality: 'low',
                  durationLimit: 30, //Video max duration in seconds
                  saveToPhotos: true,
                };
                let isCameraPermitted = await requestCameraPermission();
                let isStoragePermitted = await requestExternalWritePermission();
                if (isCameraPermitted && isStoragePermitted) {
                  launchCamera(options, (response) => {
                    console.log('Response = ', response);
            
                    if (response.didCancel) {
                      alert('User cancelled camera picker');
                      return;
                    } else if (response.errorCode == 'camera_unavailable') {
                      alert('Camera not available on device');
                      return;
                    } else if (response.errorCode == 'permission') {
                      alert('Permission not satisfied');
                      return;
                    } else if (response.errorCode == 'others') {
                      alert(response.errorMessage);
                      return;
                    }
                 
                    this.setState({
                      fileUrl:response
                    })
                 
                  });
                }
              };
            
              const chooseFile = (type) => {
                let options = {
                  mediaType: type,
                  maxWidth: 300,
                  maxHeight: 550,
                  quality: 1,
                };
            
                launchImageLibrary(options, (response) => {
                  console.log('Response = ', response);
            
                  if (response.didCancel) {
                  
                    return;
                  } else if (response.errorCode == 'camera_unavailable') {
                    alert('Camera not available on device');
                    return;
                  } else if (response.errorCode == 'permission') {
                    alert('Permission not satisfied');
                    return;
                  } else if (response.errorCode == 'others') {
                    alert(response.errorMessage);
                    return;
                  }
             
            
                  this.setState({
                    fileUrl: response
                    
                  })
                  
                });
              };
              /*end imgepicker */



if(!this.state.fileUrl.uri==''){
        this.state.img=this.state.fileUrl.uri
    }







    return(
      <ScrollView>
<AppHeader nav={this.props}/>

          <View style={{width:'100%', alignItems: 'center',}}>
       
               <Image  style={{width:250,height:250,margin:'5%',borderRadius:10}} source={{uri:this.state.img}} />
               <TouchableOpacity
               
          activeOpacity={0.5}
          style={{width:'60%',backgroundColor:"rgba(29, 34, 41, 0.78)",position:'absolute',top:"80%"}}
          onPress={() => chooseFile('photo')}>
          <Text style={{fontSize:20,color:'#fff',textAlign:'center',margin:5}}>Choose Image</Text>
        </TouchableOpacity>          
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
                            <TouchableOpacity style={{width:'100%',padding:8,borderColor:'balck',borderWidth:1}} ><Text style={{color:'#fff',textAlign:'center',  }} onPress={()=>this.setState( {About:'flex',Location:'none',List:'none'})}>About</Text></TouchableOpacity>
                            <TouchableOpacity style={{width:'100%',padding:8,borderColor:'balck',borderWidth:1}} ><Text style={{color:'#fff',textAlign:'center',   }} onPress={()=>this.setState( {About:'none',Location:'flex',List:'none'})}>Location</Text></TouchableOpacity>
                            <TouchableOpacity style={{width:'100%',padding:8,borderColor:'balck',borderWidth:1}} ><Text style={{color:'#fff',textAlign:'center'   }}onPress={()=>this.setState( {About:'none',Location:'none',List:'flex'})}>Patient List</Text></TouchableOpacity>
                            </View>
              </View>

                
          
            <View style={{width:'100%',marginTop:'10%' ,display:this.state.About}}>
           
              <View>
                                            <View >
                                                <Text style={styles.textin}>FirstName</Text>
                                            </View>
                                            <View >
                                                <TextInput editable={this.state.edt} style={styles.inputText}  value={this.state.FirstName} onChangeText={(text)=>{this.setState({FirstName:text})}}/>
                                            </View>
                                        </View>


                                        <View >
                                            <View>
                                                <Text style={styles.textin}>LastName</Text>
                                            </View>
                                            <View >
                                                <TextInput style={styles.inputText}  editable={this.state.edt} value={this.state.LastName} onChangeText={(text)=>{this.setState({LastName:text})}}/>
                                            </View>
                                        </View>



                                        <View>
                                            <View >
                                                <Text style={styles.textin}> Email</Text>
                                            </View>
                                            <View >
                                                <TextInput style={styles.inputText}  editable={this.state.edt}  value={this.state.Email} onChangeText={(text)=>{this.setState({Email:text})}}/>
                                            </View>
                                        </View>


                                        <View >
                                            <View >
                                                <Text style={styles.textin}>Password</Text>
                                            </View>
                                            <View >
                                                <TextInput style={styles.inputText}  editable={this.state.edt} secureTextEntry={true} value={this.state.Password} onChangeText={(text)=>{this.setState({Password:text})}}/>
                                            </View>
                                        </View>


                                        <View >
                                            <View >
                                                <Text style={styles.textin}>Phone</Text>
                                            </View>
                                            <View >
                                                <TextInput style={styles.inputText}  editable={this.state.edt}  value={this.state.PhoneNumber}  onChangeText={(text)=>{this.setState({PhoneNumber:text})}}/>
                                            </View>
                                        </View>

                                        <View >
                                            <View >
                                                <Text style={styles.textin}>Profession</Text>
                                            </View>
                                            <View style={{borderWidth:1,borderColor:'black',marginTop:'5%',marginHorizontal:'35%', }} >
                                            <Picker
      enabled={this.state.edt}
     selectedValue={this.state.specialty}
     style={{textAlign:'center',fontSize:20}}
     onValueChange={(specialty, itemIndex) => this.setState({specialty:specialty})}
   >
     <Picker.Item label="specialty" value="specialty" />
     <Picker.Item label="General Medicine" value="General Medicine" />
     <Picker.Item label="dentist" value="dentist" />
     <Picker.Item label="Psychologist" value="Psychologist" />
     <Picker.Item label="Ophthalmologist" value="Ophthalmologist" />
     <Picker.Item label="Reproductive doctor" value="Reproductive doctor" />
     <Picker.Item label="Dermatologist" value="Dermatologist" />
     <Picker.Item label="Plastic surgeries" value="Plastic surgeries" />
   </Picker>
                                            </View>
                                        </View>



                   <View>
  
           
            </View>
            <View>
            <Button block  style={{display:this.state.dedt,marginHorizontal:'15%',marginTop:'10%'}} onPress={this.updateprofile}><Text  style={{color:'#fff',fontSize:20}} > Save Changes </Text></Button>
            <Button block  style={{display:this.state.dedt,backgroundColor:'#bd2130',marginHorizontal:'15%',marginTop:'2%'}}  onPress={this.cancelbtn}><Text  style={{color:'#fff',fontSize:20}} > Cancel </Text></Button>
            <Button onPressIn={()=>{this.setState({dedt:'flex',edt:true,btnedit:'none'})}} block  style={{ display:this.state.btnedit,marginTop:'7%', margin:"3%", }}  ><Text  style={{color:'#fff',fontSize:20, display:this.state.btnedit}}> Edit Profile </Text></Button>
            </View>                      
            </View>
          
          
        
          
          <View style={{width:'100%' ,display:this.state.Location}}>
          <Text style={{textAlign:'center',fontSize:16,marginTop:10  }}>{this.state.info.location}</Text>
  
        </View>
      
      
        
          <View style={{width:'100%' ,display:this.state.List}}>
                     {Patient}
        </View>
      
             </View>
            < View style={{width:'100%',height:30}} >
                                               
                                            </View>
      </ScrollView>
    )

}
}
const styles = StyleSheet.create({

  inputText:{
    borderBottomColor: 'black',
    borderWidth:1,
    width:'79%',
    padding:'1%',
    margin:'2%',
    marginLeft:'11%',
textAlign:'center'
  },
textin:{
textAlign:'center',
fontWeight:'bold',
fontSize:20,
},


})

export default DoctorProfile