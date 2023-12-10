import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItemsWithId } from '../reduxSlices/basketSlice'

const DishRow = (item) => {
    const [isPressed, setIsPressed] = useState(false);
    const items = useSelector((state) => selectBasketItemsWithId(state, item?.id))
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        dispatch(addToBasket(item));
    }

    const removeItemFromBasket = () => {
        if (items?.length == 0) {
            return;
        }

        dispatch(removeFromBasket({ id: item?.id }));
    }

    return (
        <>
            <Pressable onPress={() => setIsPressed(true)} className={`bg-white p-4 border border-gray-200 ${isPressed && "border-b-0"} `}>

                {/* Dish Info */}
                <View className="flex-row" >

                    {/* Name, price, description */}
                    <View className="flex-1 pr-2">
                        <Text className="text-lg text-gray-800 mb-1"> {item?.name} </Text>
                        <Text className="text-md text-gray-400 px-1"> {item?.short_desc} </Text>
                        <Text className="px-2" >$ {item?.price}</Text>
                    </View>

                    {/* Image */}
                    <View>
                        <Image
                            style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
                            source={{ uri: urlFor(item?.image).url() }}
                            className="h-20 w-20 bg-gray-300 p-2"
                        />
                    </View>

                </View>

            </Pressable>

            {/* For handling quantity */}
            {isPressed && (
                <View className="bg-white px-4">

                    <View className="flex-row items-center space-x-2 pb-2">
                        {/* For removing dish from basket */}
                        <Pressable disabled={items?.length == 0} onPress={removeItemFromBasket}>
                            <MinusCircleIcon
                                color={items?.length > 0 ? "#00CCBB" : "gray"}
                                // color="#00CCBB"
                                size={30} />
                        </Pressable>

                        <Text>{items?.length}</Text>

                        {/* For adding dish to basket */}
                        <Pressable onPress={addItemToBasket}>
                            <PlusCircleIcon
                                color="#00CCBB"
                                size={30} />
                        </Pressable>
                    </View>

                </View>
            )}

        </>
    )
}

export default DishRow