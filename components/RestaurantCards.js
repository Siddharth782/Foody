import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'


const RestaurantCards = (item) => {

    const navigation = useNavigation();

    return (
        <Pressable className="bg-white mr-3 shadow" onPress={() => navigation.navigate("Restaurant", { restaurant: item })} >
            <Image source={{ uri: urlFor(item?.imgUrl).url() }} className="h-36 w-64 rounded-sm" />

            <View className="px-3 pb-4">

                {/* Title */}
                <Text className="font-bold text-lg pt-2">
                    {item?.title}
                </Text>

                {/* Rating & Genre */}
                <View className="flex-row items-center space-x-1">
                    <StarIcon color="green" opacity={0.5} size={22} />

                    <Text className="text-green-500">{item?.rating}</Text>
                    <Text className="text-gray-500">
                        . {item?.genre}
                    </Text>

                </View>

                {/* Location */}
                <View className="flex-row items-center space-x-1">
                    <MapPinIcon color="gray" opacity={0.4} size={22} />
                    <Text className="text-xs text-gray-500">Nearby {item?.address} </Text>
                </View>

            </View>

        </Pressable>
    )
}

export default RestaurantCards