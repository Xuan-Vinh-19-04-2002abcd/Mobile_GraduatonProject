import React, { useEffect, useState } from 'react';
import {View, Text, Image, ScrollView, TextInput,
  StyleSheet,SafeAreaView,FlatList, TouchableOpacity} from 'react-native';
import {FlatListSlider} from 'react-native-flatlist-slider';
import Pitch from './Pitch';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
const Pitchs = () => {

  const [pitchs,setPitch] = useState([])
  const getPitch = () =>{
    axios({
      method: 'get',
      url: `http://ec2-13-250-122-122.ap-southeast-1.compute.amazonaws.com/api/pitchs`,
    }).then((response) => {
      // console.log(response.data);
      setPitch(response.data["data"])
    })
    .catch((error)=>{
      console.log('Error',error)
    })
  }
  useEffect(()=>{
    getPitch()
  },[])
  const navigation = useNavigation();
  return (
    
    <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={()=>{
        navigation.navigate("Search")
      }} >
        <Text  style={styles.input}>Search Pitch</Text>
        </TouchableOpacity>
    <FlatList
      numColumns={2}
      data={pitchs}
      renderItem={({item}) => <Pitch image={item.image} address={item.address}
       namepitch = {item.namepitch} created_at= {item.created_at} idPitch = {item.id}
        price = {item.price_hour}
        phonenumber={item.phonenumber} />}
      style={styles.allpitchs}
    />
  </SafeAreaView>
  )
};

export default Pitchs;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center"
  },
  allpitchs:{
    
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 5,
    width:250
  },
})