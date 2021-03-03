import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

const NewsFeature = ({onPress}) => {
    return (
        <View style={{paddingTop: 16, paddingHorizontal: 16}}>
            <View style={{position: 'relative'}}>
                <Image source={require('../../../icons/sepak-bola.jpg')} style={{width: '100%', borderRadius: 8, height: 200}}></Image>
                <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: .2, borderRadius: 8}}></View>
                <View style={{height: 15, width: 55, position: 'absolute', top: 16, left: 16}}>
                    <Image source={require('../../../icons/white.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}}></Image>
                </View>
            </View>
            <View style={{paddingTop: 16, paddingBottom: 20, borderBottomColor: '#e8e9ed', borderBottomWidth: 1}}>
                <Text style={{fontWeight: 'bold', fontSize: 16, color: '#1c1c1c'}}>GO-NEWS</Text>
                <Text style={{fontSize: 14, fontWeight: 'normal', color: '#7a7a7a', marginBottom: 11}}>Dimas Drajat selamatkan penalti, Timnas U-23 kalahkan Brunei</Text>
                <TouchableOpacity style={{backgroundColor: '#61a756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 8}} onPress={onPress}>
                    <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>READ</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NewsFeature;