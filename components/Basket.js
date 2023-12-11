import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../reduxSlices/basketSlice'
import { useNavigation } from '@react-navigation/native'

const Basket = () => {
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal);

    return (
        <View className="absolute bottom-10 w-full z-25">

            <Pressable
                onPress={() => navigation.navigate("Basket")}
                className="mx-5 p-4 rounded space-x-1 flex-row items-center" color="#00CCBB">
                <Text className="text-white font-bold text-lg bg-[#01A296] px-2 py-1">{items?.length}</Text>
                <Text className="text-white font-bold text-lg flex-1 text-center">View Basket</Text>
                <Text className="text-lg text-white font-extrabold">$ {basketTotal}</Text>
            </Pressable>

        </View>
    )
}

export default Basket