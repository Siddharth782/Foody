import { View, Text, ScrollView, Image, Pressable } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { urlFor } from '../sanity';
import { ArrowLeftIcon, StarIcon } from 'react-native-heroicons/solid';
import { ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';
import Basket from '../components/Basket';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../reduxSlices/restaurantSlice';
import { SafeAreaView } from 'react-native-safe-area-context';

const RestaurantScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const { restaurant } = route?.params;

    useEffect(() => {
        dispatch(setRestaurant(restaurant));
    }, [dispatch])

    // console.log("The restaurant is here");
    // console.log(restaurant);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <>
            <SafeAreaView className="bg-gray-200 relative" >
                {/* The basket at the bottom denoting total and no. of items in basket */}
                <Basket />

                <ScrollView>

                    {/* Restaurant Image at the top */}
                    <View className='relative'>
                        <Image source={{ uri: urlFor(restaurant?.imgUrl).url() }}
                            className="w-full h-56 bg-gray-300 p-4" />

                        <Pressable onPress={() => navigation.goBack()} className="absolute left-3 p-2 bg-gray-100 rounded top-8" >
                            <ArrowLeftIcon size={20} color="#00CCBB" />
                        </Pressable>

                    </View>

                    {/* Restaurant's info */}
                    <View className="bg-white">
                        <View className="px-4 pt-3">

                            <View>
                                <Text className="text-3xl"> {restaurant?.title} </Text>
                            </View>

                            <View className="flex-row space-x-2 my-2">

                                {/* Rating & genre */}
                                <View className="flex-row space-x-1">
                                    <StarIcon color="green" opacity={0.5} size={22} />

                                    <Text className="text-green-500">{restaurant?.rating}</Text>
                                    <Text className="text-gray-500">
                                        . {restaurant?.genre}
                                    </Text>

                                </View>

                                {/* Location */}
                                <View className="flex-row space-x-1">
                                    <MapPinIcon color="gray" opacity={0.4} size={22} />
                                    <Text className="text-xs text-gray-500">Nearby {restaurant?.address} </Text>
                                </View>

                            </View>

                            <Text className="text-gray-200 my-3"> {restaurant?.short_desc} </Text>
                        </View>

                        {/* Regarding a food allergy */}
                        <Pressable className="flex-row items-center mb-1 space-x-2 p-4 border-y border-gray-300">
                            <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
                            <Text className="pl-2 flex-1 text-md font-bold">Have a food allergy?</Text>
                            <ChevronRightIcon color="#00CCBB" />
                        </Pressable>

                    </View>

                    {/* All Dishes at restaurant */}
                    <View className="mt-4 pb-36">

                        <Text className="px-5 py-2 text-xl font-bold">Menu</Text>
                        {restaurant?.dishes?.map(((dish) =>
                            <DishRow
                                key={dish?._id}
                                id={dish?._id}
                                name={dish?.name}
                                short_desc={dish?.short_description}
                                price={dish?.price}
                                image={dish?.image}
                            />
                        ))}
                    </View>

                </ScrollView>

            </SafeAreaView>
        </>
    )
}

export default RestaurantScreen