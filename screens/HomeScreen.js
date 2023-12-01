import React, { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from "react-native-heroicons/outline";

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
        <SafeAreaView className="bg-white pt-10">
            {/* <Text className="text-red-500"> */}


            {/* Header */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2 px-1">


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
            <View className='flex-row items-center space-x-2 pb-2 mx-4 px-1'>

                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">

                    <MagnifyingGlassIcon color="gray" size="20" />

                    <TextInput placeholder='Restaurants and Cuisines' keyboardType="default" />

                </View>

                <AdjustmentsHorizontalIcon color="#00CCBB" />

            </View>

            {/* </Text> */}
        </SafeAreaView>
    );
};

export default HomeScreen;