import { StyleSheet, Text, View,Image,Button, TouchableOpacity } from 'react-native';
import React from 'react';
import axios, { AxiosError } from 'axios';


const About = () => {
  const handlerServer = async()=>{
   try {
    const resp = await axios.get('http://192.168.1.3:3000');
    console.log(resp.data.message);
   } catch (error:AxiosError) {
    console.log('Eror ',error);
   }
  };
  return (
    <View>
      <Text>Welcome to about page</Text>
      <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={styles.image} />
       <TouchableOpacity style={styles.button} onPress={handlerServer}>
        <Text style={styles.text}>Connect to backend</Text>
       </TouchableOpacity>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  image:{
    height:300,
    width:300,
    borderRadius:12,
    alignSelf:'center',
    margin:12,
  },
  button:{
    height:40,
    width:200,
    backgroundColor:'black',
    borderRadius:12,
    alignSelf:'center',
  },
  text:{
    color:'white',
    textAlign:'center',
    marginTop:8,
  },
});
