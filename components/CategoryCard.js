import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({ imgUrl, title }) => {
    return (
        <Pressable className="relative mx-2" >

            <Image source={{ uri: imgUrl }}
                className="h-20 w-20 rounded"
            />

            <Text className="absolute font-bold left-1 bottom-1 text-white">{title}</Text>
        </Pressable>
    )
}

export default CategoryCard