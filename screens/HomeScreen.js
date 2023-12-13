import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, Image, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import { createClient } from '@sanity/client'
import { SafeAreaView } from 'react-native-safe-area-context';

function HomeScreen() {
    const [featuredCategories, setFeaturedCategories] = useState([]);

    const navigation = useNavigation();

    const client = createClient({
        projectId: "ge3jcjdv",
        dataset: "production",
        useCdn: true, // set to `false` to bypass the edge cache
        apiVersion: '2023-12-09',
    })

    useLayoutEffect(() => {

        navigation.setOptions({
            headerShown: false,
        })

        // return () => {

        // };
    }, [])

    useEffect(() => {
        client?.fetch(`
        *[_type == "featured"] {
            ...,
            restaurants[] -> {
              ...,
              dishes[] ->
            }
          }
        `).then((data) => { setFeaturedCategories(data) });
    }, [])

    // console.log(featuredCategories);

    return (
        <SafeAreaView className="bg-white pt-3 pb-10 px-0">

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

                    <TextInput placeholder='Restaurants and Cuisines' inputMode="search" />

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

                {featuredCategories?.map(category => (
                    <FeaturedRow
                        id={category?._id}
                        key={category?._id}
                        title={category?.name}
                        description={category?.short_description}
                    />
                ))}

            </ScrollView>


        </SafeAreaView>
    );
};

export default HomeScreen;