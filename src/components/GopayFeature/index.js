import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const GopayFeature = (props) => {
    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity onPress={props.onPress}>
                <Image source={props.image}></Image>
                <Text style={{color: 'white', fontSize: 13, marginTop: 15, fontWeight: 'bold', textAlign: 'center'}}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default GopayFeature;