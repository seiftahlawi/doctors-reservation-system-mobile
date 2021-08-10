import React from "react";
import AppHeaderx from './Component/AppHeader'

import { View,Text,TouchableOpacity,StyleSheet,ScrollView,Image} from 'react-native';

import { Component } from "react";

class AboutUsDx extends Component {
  render(){


  return (
      <View>
          <AppHeaderx nav={this.props}/>

<ScrollView>

      <View >

        <View style={{marginLeft:'2%'}}>
          <Text style={{fontSize:20,fontWeight:'bold',margin:5}}>About Us</Text>
          <Text style={{marginTop:'2%'}}>Five Doctor is a web application that aims to help the user to reach the best doctors and get the best advice. The subscriber in the elite can communicate with doctors outside the region to consult them on some matters related to diseases and treatments.</Text>
        </View>

        <View>
        <View style={{display:'flex',flexDirection:'row'}}>
<View style={{width:'50%',marginLeft:'2%'}}>
          <View >
            <Text style={{marginTop:'5%'}}>
            The public library includes many doctors and hospitals that can be collected Log in and learn some things about doctors
.
            </Text>

            <View style={{marginTop:'5%'}}>
              <View ></View>
              <Text style={{color:'blue'}}>Heart disease</Text>
              <Text >Extensive experience with the best doctors specializing in treating heart conditions and knowledge of the latest developments in diseases and treatments</Text>
            </View>

            <View style={{marginTop:'5%'}}>
              <View ></View>
              <Text style={{color:'blue'}}>Diabetes</Text>
              <Text >Extensive experience with the best doctors specialized in treating diabetes and knowledge of the latest developments in disease and treatment</Text>
            </View>

            <View style={{marginTop:'5%'}}>
              <View ></View>
              <Text  style={{color:'blue'}}>Epilepsy diseases</Text>
              <Text >Extensive experience with the best doctors specializing in the treatment of epilepsy and knowledge of the latest developments in the disease and its treatment</Text>
            </View>

          </View>
          </View>

          <View >
            <Image  source={{
          uri: 'http://10.0.2.2:5000/1533845191.png',
        }}
       style={{width:200,height:230}} />
          </View>
          </View>
        </View>

        <View  style={{display:'flex',flexDirection:'row',marginTop:'5%'}}>
          <View >
            <Image source={{
          uri: 'http://10.0.2.2:5000/cardiology-icon-png-7.png',
        }} style={{width:200,height:200}}/>
          </View>

          <View style={{width:'50%',marginLeft:'2%',marginRight:'3%'}}> 
            <Text style={{marginTop:'2%',color:'blue'}}>Treating heart disease</Text>
            <Text style={{marginTop:'5%'}}>
            In general, treatment for heart disease usually includes: Lifestyle changes. These include eating a low-fat and low-sodium diet, getting at least 30 minutes of moderate exercise on most days of the week, quitting smoking, and limiting alcohol intake. Medications
            </Text>
            <Text style={{marginTop:'5%'}}>
            We have the best and most modern laboratories for diagnosing heart disease and the best treatment methods include some changes in the way of life to obtain the best possible results.
            </Text>
          </View>
        </View>

        <View style={{display:'flex',flexDirection:'row',marginTop:'5%'}} >
        <View style={{width:'50%',marginLeft:'2%'}}>
            <Text style={{marginTop:'5%'}}>The most modern laboratories and the most skilled doctors and nurses to help treat your disease in the fastest time and without any complications.</Text>
            <Text style={{marginTop:'5%'}}>
            The laboratory is equipped with the latest global laboratory equipment and participates in several local and international quality control programs in addition to the internal quality control that is constantly conducted for all examinations. The laboratory receives outpatients and outpatients, as well as patient samples from inside the hospital, in addition to receiving samples from different laboratories from several regions. From inside and outside the Kingdom, such as Syria and Sudan, the laboratory operates on a 24-hour basis, and the laboratory is characterized by speed and keenness to accurately carry out comprehensive tests, which are developed and updated according to developments in the scientific and practical levels.
            </Text>
            
            <Text style={{marginTop:'5%'}}>
            The application provides the advantage of communicating with doctors, the possibility of requesting them to go to you home in emergency cases.
            </Text>
           
          </View>

            <Image  source={{
          uri: 'http://10.0.2.2:5000/PaperPal_MedicalHeroes_SVGMockup.jpg',
        }}  style={{width:200,height:200}} />
          </View>

 
          <Text style={{height:80,width:'100%'}}> </Text>
       

      </View>
   
    </ScrollView>
 
   
    </View>
  );
  }
}

export default AboutUsDx;
 