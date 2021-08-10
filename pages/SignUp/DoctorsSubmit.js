import React from 'react';
import { Component } from 'react';
import {  Button} from 'native-base';
import { View,Text,TouchableOpacity,TextInput ,StyleSheet,ScrollView,Platform} from 'react-native';
import {Image,PermissionsAndroid} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { launchCamera,launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
class DoctorsSubmit extends Component{
    constructor(props){
        super(props)
        this.state={
     isformone:true,
     FirstName:'',
     LastName:'',
     JobNumber:'',
     Password:'',
    Email:'',
    day:'0',
    month:'0',
    Year:'0',
    specialty:'specialty',
    confirmPassword:'',
    YourAddress:'',
        location:'',
        university:'',
        Experience:'',
        FirstNameError:'',
     LastNameError:'',
     JobNumberError:'',
     PasswordError:'',
    EmailError:'',
    confirmPasswordError:'',
    AddressError:'',
    locationError:'',
    universityError:'',
    ExperienceError:'',
  
    
     PhoneNumberError:'',
    
    PhoneNumber:'',

    fileUrl:{},
    data:{ name: "", path: "" },
  
  
        }
        
    }
   
        validateEmail=()=>{
  
            if(this.state.Email===''){
              this.setState({EmailError:' email is  Required '})
              return false
            }else if(!this.state.Email.includes('@')  ){
          
              this.setState({EmailError:'invalid email must contain @ '})
                 return false
            }else{
              return true
            }
            
           
          }
          validateFirstName=()=>{
            
            if(this.state.FirstName===''){
              this.setState({FirstNameError:' First Name is  Required '})
              return false
            }else{
              return true
            }
            
           
          }
          validateAddress=()=>{
            
            if(this.state.YourAddress===''){
              this.setState({AddressError:' Address is  Required '})
              return false
            }else{
              return true
            }
            
          }
          validateuniversity=()=>{
            
            if(this.state.university===''){
              this.setState({universityError:' university is  Required '})
              return false
            }else{
              return true
            }
            
          }
          validatelocation=()=>{
            
            if(this.state.location===''){
              this.setState({locationError:' location is  Required '})
              return false
            }else{
              return true
            }
            
          }
          validateExperience=()=>{
            
            if(this.state.Experience===''){
              this.setState({ExperienceError:' Experience is  Required '})
              return false
            }else{
              return true
            }
            
          }
          validateJobNumber=()=>{
            
            if(this.state.JobNumber===''){
              this.setState({JobNumberError:' Job Number is  Required '})
              return false
            }else{
              return true
            }
            
          }
          validateLastName=()=>{
            
            if(this.state.LastName===''){
              this.setState({LastNameError:' Last Name is  Required '})
              return false
            }else{
              return true
            }
            
           
          }
          validatePassword=()=>{
            
            if(this.state.Password===''){
              this.setState({PasswordError:' Password is  Required '})
              return false
            }else{
              return true
            }
            
           
          }
          validateconfirmPassword=()=>{
            
            if(this.state.confirmPassword===''){
              this.setState({confirmPasswordError:' Confirm Password is  Required '})
              return false
            }else if(!(this.state.confirmPassword===this.state.Password)){
              this.setState({confirmPasswordError:' Confirm Password must equal Password '})
            }else{
              return true
            }
            
            
           
          }
        
        
          handeleChange=(e)=>{
            this.setState({
              [e.target.name]:e.target.value,
            })
          }
          changePatientsform=(e)=>{
            e.preventDefault()
            const isEmailValid=this.validateEmail();
            const isFirstNameValid=this.validateFirstName();
            const isLastNameValid=this.validateLastName();
            const isPasswordValid=this.validatePassword();
            const isconfirmPasswordValid=this.validateconfirmPassword();
            const isJobNumberValid=this.validateJobNumber();
            const isPhoneNumberValid=this.validatePhoneNumber();
            if(isEmailValid&&isFirstNameValid&&isLastNameValid&&isPasswordValid&&isconfirmPasswordValid&&isJobNumberValid&&isPhoneNumberValid){
              if(this.state.isformone==true){
                this.setState({
                    isformone:false
                })
              }else{
                this.setState({
                    isformone:true
                })
              }
            }
          
          }
        
          dayOB=(start, end)=> {
            const options = [];
        
            for(let i = start; i <= end; i++) {
                options.push(<Picker.Item label={i+''} value={i+''} key={i}  />)
            }
        
            return options;
        }
        
        YearOB=(start, end)=> {
          const options = [];
        
          for(let i=start; i >=end; i--) {
              options.push(<Picker.Item label={i+''} value={i+''} key={i}  />)
          }
        
          return options;
        }
      

        m(){
          fetch("http://10.0.2.2:5000/DoctorsSignUp",{
            method:'POST',
            headers:new Headers({'Content-Type':'application/x-www-form-urlencoded'}),
            body:'FirstName='+this.state.FirstName+'&LastName='+this.state.LastName+'&Email='+this.state.Email+'&PhoneNumber='+this.state.PhoneNumber+'&JobNumber='+this.state.JobNumber+'&Password='+this.state.Password+'&YourAddress='+this.state.YourAddress+'&location='+this.state.location+'&Experience='+this.state.Experience+'&university='+this.state.university+'&day='+this.state.day+'&month='+this.state.month+'&Year='+this.state.Year+'&specialty='+this.state.specialty+'&fileToUpload='+this.state.fileUrl.uri
          }).catch(function(error){console.log(error.message)})

        }
         registerDoctor=()=>{
        
            const isAddressValid=this.validateAddress();
            const isuniversityValid =this.validateuniversity();
            const islocationValied =this.validatelocation()
            const isExperiencValed=this.validateExperience()
            if(isAddressValid&&isuniversityValid&&islocationValied&&isExperiencValed){
        
              if(this.state.fileUrl!=""){
                this.s()
                props.navigation.navigate({routeName:'Login'})
            }else{
             
                this.m()
                props.navigation.navigate({routeName:'Login'})
            }
           
  
            
          }
          }

          async s() {
       
            const formData = new FormData();       
            formData.append('file', this.state.fileUrl); // appending file
            await  axios.post('http://10.0.2.2:5000/upload', formData, {
             
           }).then(res => {
               console.log(res);
               this.setState({
      data:{ name: res.data.name,
       path: 'http://localhost:5000' + res.data.path
      }
               })
              
           }).catch(err => console.log(err))
    
           this.m()
          }



          validatePhoneNumber=()=>{
            if(this.state.PhoneNumber===''){
              this.setState({PhoneNumberError:' Phone Number is  Required '})
              return false
            }else{
              return true
            }
          }
          
 
          render(){

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
        fileUrl: response
      })
      
    });
  };
  /*end imgepicker */
          
           
           
         if(this.state.isformone){
            return( 
              <ScrollView>
           
 <Text style={{textAlign: "center",marginTop:'11%',fontSize:30}}>Doctors</Text>
 <View>

 <TextInput style={styles.inputText}  placeholder="First Name" name='FirstName' value={this.state.FirstName} onBlur={this.validateFirstName}   onChangeText={(text)=>{this.setState({FirstName:text})}}/>
 <View style={{color:'red',fontSize:12}}><Text>{this.state.FirstNameError}</Text></View>
 </View>

 <View>

 <TextInput  style={styles.inputText} placeholder="Last Name"  name='LastName' value={this.state.LastName} onBlur={this.validateLastName}  onChangeText={(text)=>{this.setState({LastName:text})}}/>
 <View style={{color:'red',fontSize:12}}><Text>{this.state.LastNameError}</Text></View>
 </View>

 <View>
 <TextInput style={styles.inputText}  placeholder="Email Address"  name='Email' value={this.state.Email} onBlur={this.validateEmail}  onChangeText={(text)=>{this.setState({Email:text})}}/>
 <View style={{color:'red',fontSize:12}}><Text>{this.state.EmailError}</Text></View>
 </View>

 <View>
 <TextInput style={styles.inputText}  placeholder="Job Number"  name='JobNumber' value={this.state.JobNumber} onBlur={this.validateJobNumber}  onChangeText={(text)=>{this.setState({JobNumber:text})}}/>
 <View style={{color:'red',fontSize:12}}><Text>{this.state.JobNumberError}</Text></View>
 </View>

 <View>
 <TextInput style={styles.inputText}  placeholder="Phone Number"  name='PhoneNumber' value={this.state.PhoneNumber} onBlur={this.validatePhoneNumber}  onChangeText={(text)=>{this.setState({PhoneNumber:text})}}/>
 <View style={{color:'red',fontSize:12}}><Text>{this.state.PhoneNumberError}</Text></View>
 </View>

 <View>
 <TextInput style={styles.inputText}  secureTextEntry={true}  placeholder="Password"  name='Password' value={this.state.Password} onBlur={this.validatePassword} onChangeText={(text)=>{this.setState({Password:text})}}/>
 <View style={{color:'red',fontSize:12}}><Text>{this.state.PasswordError}</Text></View>
 </View>

 <View>
 <TextInput style={styles.inputText}  secureTextEntry={true}  placeholder="Confirm Password"  name='confirmPassword' value={this.state.confirmPassword} onBlur={this.validateconfirmPassword} onChangeText={(text)=>{this.setState({confirmPassword:text})}}/>
 <View style={{color:'red',fontSize:12}}><Text>{this.state.confirmPasswordError}</Text></View>
 
 

 </View>




 


 <View >
 <Button block style={styles.btnnext} onPress={this.changePatientsform}><Text>Next</Text></Button>

 </View>
 

                
                </ScrollView>
                
                
                )
            }else{
                return(
                    <ScrollView>
 <Text  style={{textAlign: "center",marginTop:'11%',fontSize:30}}>Doctors</Text>
 <View >
                
                <TextInput  style={styles.inputText}  placeholder="Your Address" name='YourAddress' value={this.state.YourAddress} onBlur={this.validateAddress} onChangeText={(text)=>{this.setState({YourAddress:text})}}/>
                <View style={{color:'red',fontSize:12}}><Text>{this.state.AddressError}</Text></View>
              </View>

              <View >
                <TextInput  style={styles.inputText}   placeholder="The location of the clinic or hospital"   name='location' onBlur={this.validatelocation} value={this.state.location} onChangeText={(text)=>{this.setState({location:text})}}/>
                <View style={{color:'red',fontSize:12}}><Text>{this.state.locationError}</Text></View>
              </View>


<View >
     <Text style={{textAlign: "center",marginBottom:'5%',fontSize:20}}>Date Of Birthday</Text>
 
<View style={{flex: 1, flexDirection: 'row',margin:'8%',marginTop:'2%',marginLeft:'15%'}}>

<Picker
     
        selectedValue={this.state.day}
        style={{ height: 50, width: 110 ,borderColor:'black',borderWidth:1}}
        onValueChange={(newday, itemIndex) => this.setState({day:newday})}
      >
        <Picker.Item label="day" value="0"  />
        {this.dayOB(1, 31)}
      </Picker>

      <Picker
    
        selectedValue={this.state.month}
        style={{ height: 50, width: 110,borderColor:'black',borderWidth:1 }}
        onValueChange={(newMonth, itemIndex) => this.setState({month:newMonth})}
      >
        <Picker.Item label="Month" value="0"  />
        <Picker.Item label="January" value="1"  />
        <Picker.Item label="February" value="2"  />
        <Picker.Item label="March" value="3"  />
        <Picker.Item label="April" value="4"  />
        <Picker.Item label="May" value="5"  />
        <Picker.Item label="June" value="6"  />
        <Picker.Item label="July" value="7"  />
        <Picker.Item label="August" value="8"  />
        <Picker.Item label="September" value="9"  />
        <Picker.Item label="October" value="10"  />
        <Picker.Item label="November" value="11"  />
        <Picker.Item label="December" value="12"  />
      </Picker>

      <Picker
     
        selectedValue={this.state.Year}
        style={{ height: 50, width: 110 ,borderColor:'black',borderWidth:1}}
        onValueChange={(newYear, itemIndex) => this.setState({Year:newYear})}
      >
        <Picker.Item label="Year" value="0"  />
        {this.YearOB(2021,1930)}
      </Picker>

</View>
       
       </View> 
       <Text style={{textAlign: "center",marginBottom:'5%',fontSize:20}}>specialty</Text>  
       <View  style={{flex: 1, flexDirection: 'row',margin:'8%',marginTop:'2%',width:'100%',   justifyContent: "center"}} >
      

    

       <Picker
     
        selectedValue={this.state.specialty}
        style={{ height: 50,  width: 200,justifyContent: "center" }}
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



 <View >
                
                <TextInput placeholder="The university you graduated from" style={styles.inputText}  name='university' value={this.state.university} onBlur={this.validateuniversity}onChangeText={(text)=>{this.setState({university:text})}}/>
                <View ><Text style={{color:'red',fontSize:12}}>{this.state.universityError}</Text></View>
              </View>

              <View >
            
                <TextInput placeholder="Years of Experience" name='Experience' style={styles.inputText}  value={this.state.Experience} onBlur={this.validateExperience} onChangeText={(text)=>{this.setState({Experience:text})}}/>
                <View ><Text style={{color:'red',fontSize:12}}>{this.state.ExperienceError}</Text></View>

              </View>
     
              <View >

      <View style={styles.container}>
      <Text style={{textAlign: "center",marginBottom:'5%',fontSize:20}}>insert your Profile Photo</Text>
        {/* show image */}
        <Image
          source={{uri: this.state.fileUrl.uri}}
          style={styles.imageStyle}
        />

      

        {/*Launch Camera for Image*/}
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.btnStyle}
          onPress={() => captureImage('photo')}>
          <Text style={styles.textStyle}>
            Launch Camera for Image
          </Text>
        </TouchableOpacity>

       

      {/*Choose Image*/}
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.btnStyle}
          onPress={() => chooseFile('photo')}>
          <Text style={styles.textStyle}>Choose Image</Text>
        </TouchableOpacity>

      

        </View>
    </View>
    <View  style={styles.btnnext}>
 <Button block style={styles.btn} onPress={this.registerDoctor}><Text style={{color:'#fff'}}>SignUp</Text></Button>
 <Button block style={styles.btn} onPress={this.changePatientsform} style={{backgroundColor:'#dc3545'}}><Text style={{color:'#fff'}}>Back</Text></Button>

 </View>
 
                    </ScrollView>
                )
            }
          }


           
          }


          const styles = StyleSheet.create({

            inputText:{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              width:'79%',
              padding:'2%',
              margin:'2%',
              marginLeft:'11%'
          
            },
            btnnext:{
              marginBottom:150,
              margin:'3%',
            
            },
            btn:{
              margin:"5%"
            }
              ,
              container: {
                flex: 1,
                padding: 10,
                alignItems: 'center',
              },
              titleText: {
                fontSize: 22,
                fontWeight: 'bold',
                textAlign: 'center',
                paddingVertical: 20,
                backgroundColor: '#6666ff',
              },
              textStyle: {
                padding: 10,
                color: '#fff',
                textAlign: 'center',
              },
              btnStyle: {
                alignItems: 'center',
                backgroundColor: '#6666ff',
                padding: 5,
                marginVertical: 10,
                width: 250,
                borderRadius:5
              },
              imageStyle: {
                width: 200,
                height: 200,
                margin: 5,
                borderRadius:5
              },
          });

      



export default DoctorsSubmit