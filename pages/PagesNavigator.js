import {
    // @ts-ignore
    createBottomTabNavigator,
    createAppContainer,
    // @ts-ignore 
    createDrawerNavigator
  } from 'react-navigation';
  
  import { createStackNavigator } from 'react-navigation-stack'
  import User from './DoctorsMainPage/DoctorsMainPage.js'
  import AppHeader from './DoctorsMainPage/Component/AppHeader.js'
  import AboutUsD from './DoctorsMainPage/AboutUs'
  import Login from './LoginPage/Login'
  import Home from './HomePage/Home'
  import SignUp from './SignUp/SignUp'
  import DoctorProfile from './DoctorsMainPage/DoctorProfile.js'
  import CardAdeddPatient from './DoctorsMainPage/CardAdeddPatient'
  import PatientsMainPage from './PatientsMainPage/PatientsMainPage.js'
  import PatientsProfile from './PatientsMainPage/PatientsProfile'
  import AboutUsDx from './PatientsMainPage/AboutUs'
  import AppHeaderx from './PatientsMainPage/Component/AppHeader'
  import Card from './PatientsMainPage/Card.js'
  import DoctorsP from './PatientsMainPage/DoctorsP.js'
  const PagesNavigator = {
    
    Home: {
        screen: Home,
       
        navigationOptions: {
            headerShown: false,
        },
      },
   Login: {
        screen: Login,
      },
  SignUp: {
        screen: SignUp,
      },
      User:{
        screen: User,
        navigationOptions: {
          headerShown: false,
      },
      },
      AppHeader:{
        screen:AppHeader,
        navigationOptions: {
          headerShown: false,
      },

      } ,DoctorProfile: {
        screen:DoctorProfile,
        navigationOptions: {
          headerShown: false,
      },
      },AboutUsD: {
        screen: AboutUsD,
        navigationOptions: {
          headerShown: false,
      },
      },
      
      PatientsMainPage:{

        screen:PatientsMainPage,
        navigationOptions: {
          headerShown: false,
      },
      },Card:{
        screen:Card,
        navigationOptions: {
          headerShown: false,
      },
      },
      CardAdeddPatient: {
        screen: CardAdeddPatient,
        navigationOptions: {
          headerShown: false,
      },
      },
      PatientsProfile: {
        screen:PatientsProfile,
        navigationOptions: {
          headerShown: false,
      },
      },
      AboutUsDx:{
        screen:AboutUsDx,
        navigationOptions: {
          headerShown: false,
      },
      },AppHeaderx:{
        screen:AppHeaderx,
        navigationOptions: {
          headerShown: false,
      },
      },
      DoctorsP:{
        screen:DoctorsP,
        navigationOptions: {
          headerShown: false,
      },
      }
      
    
      
        
    
     
   

      
    }

  

  const HomeStack=createStackNavigator(PagesNavigator);
  export default createAppContainer(HomeStack) 