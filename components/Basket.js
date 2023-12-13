import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../reduxSlices/basketSlice'
import { useNavigation } from '@react-navigation/native'

const Basket = () => {
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal);

    if (items?.length === 0) {
        return null;
    }

    return (
        <View className="absolute bottom-10 w-full z-50">

            <Pressable
                onPress={() => navigation.navigate("Basket")}
                className="mx-5 p-4 rounded space-x-1 flex-row items-center bg-[#00CCBB]">

                {/* No. of Items */}
                <Text className="text-white font-bold text-lg bg-[#01A296] px-2 py-1">{items?.length}</Text>
                <Text className="text-white font-bold text-lg flex-1 text-center">View Basket</Text>

                {/* Basket Total Sum */}
                <Text className="text-lg text-white font-extrabold">$ {basketTotal.toFixed(2)}</Text>
            </Pressable>

        </View>
    )
}

export default Basket