import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import call from 'react-native-phone-call';
import axios from 'axios';
import ReviewPitch from "./ReviewPitch";
function DetailsScreen({ route, navigation }) {
    const { id, image, namepitch, address, price, phonenumber } = route.params;
    const [phone, setPhone] = useState(phonenumber);
    const [reviewPitch, setReviewPitch] = useState([])
    const triggerCall = () => {
        const args = {
            number: phone, // Use commas to add time between digits.
            prompt: true
        }

        call(args).catch(console.error)
    }

    const getAllReview = () => {
        axios.post('http://ec2-13-250-122-122.ap-southeast-1.compute.amazonaws.com/api/reviews', {
            pitch_id: id
        })
            .then(function (response) {
                console.log(response);
                setReviewPitch(response.data['data'])
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        getAllReview()
    }, [])
    console.log(reviewPitch)
    return (
        <View >
            <View style={styles.viewImage}>
                <Image

                    source={{
                        uri: image,
                    }}
                    style={{ width: '100%', height: 150 }}
                />
            </View>
            <View style={styles.iconDetail}>
                <Text>Đặt Sân</Text>
                <Text>Ví trí</Text>
                <Text>Chia sẻ</Text>
                <Text>Báo cáo</Text>
            </View>
            <View>
                <Text>{namepitch}</Text>
                <Text>{address}</Text>
                <Text>{phonenumber}</Text>
                <Text>{price}</Text>
                <Text onPress={triggerCall}>GỌi điện</Text>
            </View>
            <FlatList
                data={reviewPitch}
                renderItem={({ item }) => <ReviewPitch name={item.fullname} avatar={item.avatar} title={item.title} />}
                keyExtractor={item => item.user_id}
            />

        </View>
    );
}
export default DetailsScreen;
const styles = StyleSheet.create({
    viewImage: {
        width: '100%',
        paddingHorizontal: 15,
        paddingTop: 5
    },
    iconDetail: {
        flexDirection: "row",
        justifyContent: 'space-around',
        marginTop: '2%'

    }
})