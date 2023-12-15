import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../reduxSlices/restaurantSlice'
import * as Animate from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'


const PreparingOrderScreen = () => {
    const restaurant = useSelector(selectRestaurant);
    const navigation = useNavigation();

    useEffect(() => {

        setTimeout(() => {
            navigation.navigate("Delivery");
        }, 4000);

    }, [])


    return (
        <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
            <Animate.Image
                source={require("../assets/Delievery.gif")}
                animation="slideInUp"
                iterationCount={1}
                className="h-96 w-96"
            />
            <Animate.Text
                animation="slideInUp"
                iterationCount={1}
                className="text-lg my-10 text-white font-bold text-center"
            >
                Waiting for confirmation from your restaurant, {restaurant?.title}.
            </Animate.Text>

            <Progress.Circle indeterminate={true} size={25} color='white' />

        </SafeAreaView>
    )
}

export default PreparingOrderScreen