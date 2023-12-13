import { View, Text, Pressable, ScrollView, Image } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../reduxSlices/restaurantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../reduxSlices/basketSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';

const BasketScreen = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);

    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {});

        setGroupedItemsInBasket(groupedItems);

    }, [items])

    // console.log(groupedItemsInBasket);

    return (
        <SafeAreaView className="flex-1 bg-white">

            <View className="flex-1 bg-gray-100">

                {/* Header on top */}
                <View className="p-5 border-b border-[#00CCBB] shadow-xs bg-white">

                    {/* Name of Restaurant */}
                    <View>
                        <Text className="text-lg font-bold text-center">Basket</Text>
                        <Text className="text-center text-gray-400">{restaurant?.title}</Text>
                    </View>

                    {/* Go Back button */}
                    <Pressable
                        onPress={navigation.goBack}
                        className="rounded-full bg-gray-100 absolute top-3 right-5"
                    >
                        <XCircleIcon color="#00CCBB" width={40} height={40} />
                    </Pressable>

                </View>

                {/* Time arriving */}
                <View
                    className="flex-row items-center space-x-3 px-4 py-3 my-5 bg-white">

                    <Image
                        source={{ uri: 'https://links.papareact.com/wru' }}
                        className="h-7 w-7 bg-gray-300 p-5 rounded-full"
                    />

                    <Text className="flex-1">Deliever in 50 mins</Text>

                    <Pressable>
                        <Text className="text-[#00CCBB]">Change</Text>
                    </Pressable>

                </View>

                {/* Items in Basket */}
                <ScrollView className="divide-y divide-gray-200 bg-white mx-3 shadow-xl rounded">
                    {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                        <View
                            key={key}
                            className="flex-row items-center space-x-4 py-4 px-5 mx-3 bg-white"
                        >
                            {/* Number of any dish */}
                            <Text className="text-[#00CCBB]">{items?.length} X</Text>

                            {/* Image of any dish */}
                            <Image
                                source={{ uri: urlFor(items[0]?.image).url() }}
                                className="h-12 w-12 rounded-full"
                            />

                            {/* Dish Name */}
                            <Text className="flex-1">{items[0]?.name}</Text>

                            <Text className="text-gray-600" >$ {items[0].price}</Text>

                            {/* Remove dish from basket */}
                            <Pressable
                                onPress={() => dispatch(removeFromBasket({ id: key }))}
                            >
                                <Text className="text-[#00CCBB]">Remove</Text>
                            </Pressable>

                        </View>
                    ))}
                </ScrollView>

                {/* Total Payment */}
                <View className="bg-white p-5 m-3 shadow-xl">

                    {/* SubTotal */}
                    <View className="flex-row justify-between">
                        <Text className="text-gray-300">SubTotal</Text>
                        <Text className="text-gray-500">$ {basketTotal.toFixed(2)}</Text>
                    </View>

                    {/* Delievery Fees */}
                    <View className="flex-row justify-between">
                        <Text className="text-gray-300">Delievery Fees</Text>
                        <Text className="text-gray-500">$ 4.99</Text>
                    </View>

                    {/* Taxes */}
                    <View className="flex-row justify-between">
                        <Text className="text-gray-300">Taxes</Text>
                        <Text className="text-gray-500">$ {(0.1 * basketTotal).toFixed(2)}</Text>
                    </View>

                    <View className="flex-row justify-between">
                        <Text>Total</Text>
                        <Text>$ {(4.99 + 1.1 * basketTotal).toFixed(2)}</Text>
                    </View>

                </View>



            </View>

        </SafeAreaView>
    )
}

export default BasketScreen