import React from 'react';
import { View, Text, Image } from 'react-native';

const MainFeature = (props) => {
    return (
        <View style={{width: '25%', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={props.image}></Image>
            </View>
            <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>{props.title}</Text>
        </View>
    )
}

export default MainFeature;