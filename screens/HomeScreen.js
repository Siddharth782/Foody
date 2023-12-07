import React, { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

function HomeScreen() {

    const navigation = useNavigation();

    useLayoutEffect(() => {

        navigation.setOptions({
            headerShown: false,
        })

        // return () => {

        // };
    }, [])

    return (
        <SafeAreaView className="bg-white py-10">

            {/* Header */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2">


                <Image
                    source={{ uri: 'https://links.papareact.com/wru' }}
                    className="h-7 w-7 bg-gray-300 p-5 rounded-full"
                />

                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
                    <Text className="font-bold text-xl">Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View>

                <UserIcon size={35} color="#00CCBB" />

            </View>

            {/* Search Box */}
            <View className='flex-row items-center space-x-2 pb-2 mx-4'>

                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">

                    <MagnifyingGlassIcon color="gray" size="20" />

                    <TextInput placeholder='Restaurants and Cuisines' keyboardType="default" />

                </View>

                <AdjustmentsHorizontalIcon color="#00CCBB" />

            </View>

            {/* Body */}
            <ScrollView className="bg-gray-100"
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
            >

                {/* Categories */}
                <Categories />

                {/* Featured Restaurants */}
                <FeaturedRow
                    id="123"
                    title="Featured"
                    description="Paid placements"
                />

                {/* Tasty Discounts*/}
                <FeaturedRow
                    id="1234"
                    title="Tasty Discounts"
                    description="Everyone's favorite juicy discounts"
                />

                {/* Offers Near You */}
                <FeaturedRow
                    id="12"
                    title="Offers"
                    description="Local Restaurants"
                />
            </ScrollView>


        </SafeAreaView>
    );
};

export default HomeScreen;