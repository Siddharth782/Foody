import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCards from './RestaurantCards'

const FeaturedRow = ({ title, description, id }) => {
    return (
        <View>

            <View className="mt-4 flex-row items-center px-4 justify-between">
                <Text className="font-bold text-lg" >
                    {title}
                </Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>

            <Text className="text-xs text-gray-200 px-5">{description}</Text>

            <ScrollView horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }} className="pt-4"
                showsHorizontalScrollIndicator={false} >

                {/* Restaurant Cards */}
                <RestaurantCards id={123} imgUrl="https://links.papareact.com/gn7" title="Yo! Sushi" rating={4} genre="Japan" address="123 lul" short_desc="Testing" dishes={[]} long={20} lat={25} />

                <RestaurantCards id={123} imgUrl="https://links.papareact.com/gn7" title="Yo! Sushi" rating={4} genre="Japan" address="123 lul" short_desc="Testing" dishes={[]} long={20} lat={25} />

                <RestaurantCards id={123} imgUrl="https://links.papareact.com/gn7" title="Yo! Sushi" rating={4} genre="Japan" address="123 lul" short_desc="Testing" dishes={[]} long={20} lat={25} />

            </ScrollView>
        </View>
    )
}

export default FeaturedRow