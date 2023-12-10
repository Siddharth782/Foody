import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCards from './RestaurantCards'
import { createClient } from '@sanity/client'

const FeaturedRow = ({ title, description, id }) => {

    const [restaurants, setRestaurants] = useState([]);

    const client = createClient({
        projectId: "ge3jcjdv",
        dataset: "production",
        useCdn: true, // set to `false` to bypass the edge cache
        apiVersion: '2023-12-09',
    })

    useEffect(() => {

        client?.fetch(`
        *[_type == "featured" && _id == $id ]{
            ...,
            restaurants[]->{
                ...,
                dishes[]->,
                type ->{name}
              }
          }
        `, { id }).then((data) => { setRestaurants(data[0]?.restaurants) });

    }, [id])

    // console.log(restaurants);


    return (
        <View>

            <View className="mt-4 flex-row items-center px-4 justify-between">
                <Text className="font-bold text-lg" >
                    {title}
                </Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>

            <Text className="text-xs text-gray-400 px-5">{description}</Text>

            <ScrollView horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }} className="pt-4"
                showsHorizontalScrollIndicator={false} >

                {/* Restaurant Cards */}

                {restaurants?.map((restaurant) => (
                    <RestaurantCards
                        key={restaurant._id}
                        id={restaurant._id}
                        imgUrl={restaurant?.image}
                        address={restaurant?.address}
                        title={restaurant?.name}
                        dishes={restaurant?.dishes}
                        rating={restaurant?.rating}
                        genre={restaurant?.type?.name}
                        short_desc={restaurant?.short_description}
                        long={restaurant?.long}
                        lat={restaurant?.lat} />
                ))}

            </ScrollView>
        </View>
    )
}

export default FeaturedRow