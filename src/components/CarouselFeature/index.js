import React from 'react'
import { View, Image, Text } from 'react-native';

export default function CarouselFeature (props) {
    return (
        <View style={{marginRight: 16}}>
            <View style={{width: 150, height: 150, borderRadius: 10}}>
                <Image source={props.image} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 8}}></Image>
            </View>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 12}}>{props.title}</Text>
        </View>
    )
}
