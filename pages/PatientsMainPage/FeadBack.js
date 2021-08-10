
import React from 'react'
import { Component } from 'react'
import { View,Text,Image,TextInput} from 'react-native';
import {  Button} from 'native-base';


class FeadBack extends Component{
    constructor(props){
        super(props)
        this.state={
            info:[],
            newcomm:'',
            d:'flex',
            e:'none',
            edcomm:'',
            fead:'',
            count:0,
            img:''
         
        }
      
    }
    

      componentDidMount(){

        fetch("http://10.0.2.2:5000/Getfeadeback").then(response => response.json())            
           .then(data=>{ this.setState({info:data,img:data.ProfileChange})})
           .then(()=>{this.state.img=this.state.img.replace("localhost", "10.0.2.2")})
          .catch(err => { console.log(err) })
            
        
       }
       componentDidUpdate(){
        fetch("http://10.0.2.2:5000/Getfeadeback").then(response => response.json())            
        .then(data=>{ this.setState({info:data,img:data.ProfileChange})})
        .then(()=>{this.state.img=this.state.img.replace("localhost", "10.0.2.2")})
       .catch(err => { console.log(err) })
       }

     

 
    render(){
   
 
        const feadback=this.state.info.map((fead,index)=>{
        return(   
            
            
            fead.feedback.map((f)=>{

if(this.props.dr==f.email ){
   
    this.state.edcomm=f.comment
   
      if(this.props.pt.user==fead.Email){
         
          if(this.state.count==0){
           this.state.FirstName=f.comment+this.state.FirstName      
           this.state.count++
          }
     
    return(
       
        <View style={{marginBottom:'5rem'}} key={index}>
     
        <View >
             <Image  source={{uri:this.state.img}} style={{width:"25%",borderRadius:30,height:"10%"}}/> 
             
             </View>

        <View style={{marginLeft:1}}>

            <Text >{fead.Email}</Text>

             <View >

                 <View style={{display:this.state.d}} >
                 
                 
                 <Text>{f.comment}</Text>
             
             
             </View> 

             </View>

            <View> 
                <TextInput style={{display:this.state.e}} value={this.state.fead} onChangeText={(text)=>{this.setState({fead:text})}}/> 
                
                </View>
            <View style={{margin:1}}>  

             <Button style={{display:this.state.d}} onPress={()=>{ this.setState({d:'none',e:'flex'})}}>
                  <Text>Edit</Text>
                  </Button>  

                  <Button  style={{display:this.state.e,marginRight:5}}  onPress={()=>{this.setState({e:'none',d:'flex'})}}> 
                  <Text>save</Text>

                  </Button>

                  <Button  onPress={
            (e)=>{
             e.preventDefault()
             fetch("http://10.0.2.2/DoctorsReservationSystemPHPserver/deletcomment.php",{
                 method:'POST',
                 headers:new Headers({'Content-Type':'application/x-www-form-urlencoded'}),
                 body:'Dremail='+f.email+'&comment='+f.comment+'&pemail='+this.props.pt.user
               })
               .catch(err => { console.log(err) })
             
            }}> 
            
            <Text>Delete</Text>

            </Button>
             </View>
        </View>
        
    </View>

   
)
        }else{
            return(
        
                <View style={{marginBottom:5}} key={index}>
                <View  >
                     <Image  source={{uri:this.state.img}}  style={{width:"25%",borderRadius:30,height:"10%"}}/>
                      </View>
                <View style={{marginLeft:1}}>


                    <Text >{fead.Email}</Text> 

                    <View> <Text>{f.comment}</Text> </View>
                   
             
                </View>
             </View>

            )
        }
    
    
    }
             

/*
 onClick={
       ( e)=>{
        e.preventDefault()
        fetch("http://localhost/DoctorsReservationSystemPHPserver/updatefeadback.php",{
            method:'POST',
            headers:new Headers({'Content-Type':'application/x-www-form-urlencoded'}),
            body:'Dremail='+f.email+'&comment='+f.comment+'&pemail='+localStorage.user+'&newvaluecomm='+this.state.newcomm
          })
          .catch(err => { console.log(err) })
        
       }}

*/

            })) 
   
        
        })
        

    return(
        <View>
{feadback}
        </View>
    )

}
}

export default FeadBack
