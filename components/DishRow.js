import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'
import { CurrencyDollarIcon } from 'react-native-heroicons/solid'

const DishRow = (item) => {
    console.log(item)
    return (
        <Pressable className="bg-white p-4">

            {/* Dish Info */}
            <View className="flex-row" >

                {/* Name, price, description */}
                <View>
                    <Text className="text-lg text-gray-800 mb-1"> {item?.name} </Text>
                    <Text className="text-md text-gray-400"> {item?.short_desc} </Text>
                    <Text>
                        <CurrencyDollarIcon color="gray" className="h-20 w-20 mr-2" />
                        {item?.price}
                    </Text>
                </View>

                {/* Image */}
                <View>
                    <Image
                        source={{ uri: urlFor(item?.image).url() }}
                        className="h-20 w-20 bg-gray-300 p-2"
                    />
                </View>

            </View>

            {/* For handling quantity */}
            {/* <View>
            </View> */}
        </Pressable>
    )
}

export default DishRow