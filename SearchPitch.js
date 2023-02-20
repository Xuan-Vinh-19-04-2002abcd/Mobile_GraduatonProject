import { useEffect, useState } from "react"
import { SafeAreaView, Text,StyleSheet, TextInput,FlatList } from "react-native"
import axios from 'axios';
import Pitch from "./Pitch";
const SearchPitch = () =>{

    const [texSearch,setTextSearch] = useState()

    const searchPitch = () =>{
        axios.post('http://ec2-13-250-122-122.ap-southeast-1.compute.amazonaws.com/api/pitchs/search', {
            textSearch: texSearch
        })
            .then(function (response) {
                setTextSearch(response.data['data'])
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    useEffect(()=>{
        searchPitch()
    },[texSearch])
    console.log(texSearch);
    return(
        <SafeAreaView style = {styles.container}>
            <TextInput style = {styles.input}
                onChangeText={newText =>setTextSearch(newText)}
            ></TextInput>
             <FlatList
      numColumns={2}
      data={texSearch}
      renderItem={({item}) => <Pitch image={item.image} address={item.address}
       namepitch = {item.namepitch} created_at= {item.created_at} idPitch = {item.id}
        price = {item.price_hour}
        phonenumber={item.phonenumber} />}
      style={styles.allpitchs}
    />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 5,
            width:250
          },
})
export default SearchPitch;