import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const Pitch = ({image,namepitch,address,created_at,idPitch,price,phonenumber}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.background}>
            <TouchableOpacity  onPress={()=> {
            navigation.navigate('Detail',{
                id:idPitch,
                image:image,
                namepitch:namepitch,
                address:address,
                price:price,
                phonenumber:phonenumber
            })
    }}  >
                <View>
                    <Image
                        source={{
                            uri:image,
                        }}
                        style={{ width: 150, height: 100 }}
                    />
                </View>
                <View>
                    <Text>{namepitch}</Text>
                    <Text>{address}</Text>
                    <Text>{created_at}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default Pitch;
const styles = StyleSheet.create({
    background: {
        width: '45%',
        borderRadius: 8,
        borderWidth: 1,
        alignItems: 'center',
        marginRight:5,
        marginVertical:5
    }
})