import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

const BannerFeature = (props) => {
    return (
        <View style={{padding: 16}}>
            <View style={{position: 'relative'}}>
                <Image source={require('../../../icons/food-banner.jpg')} style={{width: '100%', borderRadius: 8, height: 200}}></Image>
                <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: .2, borderRadius: 8}}></View>
                <View style={{height: 15, width: 60, position: 'absolute', top: 16, left: 16}}>
                <Image source={require('../../../icons/white.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}}></Image>
                </View>
                <View style={{position: 'absolute', bottom: 0, left: 0, width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 16}}>
                <View>
                    <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 4}}>{props.title}</Text>
                    <Text style={{fontSize: 12, fontWeight: '400', color: 'white'}}>{props.caption}</Text>
                </View>
                <View style={{flex: 1, paddingLeft: 12}}>
                    <TouchableOpacity style={{backgroundColor: '#61a756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'stretch', borderRadius: 8}}>
                    <Text style={{fontSize: 10, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>GET VOUCHER</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
            <View style={{borderBottomColor: '#e8e9ed', borderBottomWidth: 1, marginBottom: 20, marginTop: 16}}></View>
        </View>
    )
}

export default BannerFeature;