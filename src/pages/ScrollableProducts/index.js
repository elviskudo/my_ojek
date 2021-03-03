import React, { Component } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'

import CarouselFeature from '../../../src/components/CarouselFeature';

class ScrollableProducts extends Component {
    render () {
        return (
            <View>
                <View style={{height: 15, width: 60, marginLeft: 16}}>
                    <Image source={require('../../../icons/go-food.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}}></Image>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingHorizontal: 16}}>
                    <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1c1c1c'}}>Nearby Restaurant</Text>
                    <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61a756'}}>See All</Text>
                </View>
                <ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 16}}>
                    <CarouselFeature image={require('../../../icons/go-food-kfc.jpg')} title="KFC Aeon Mall"></CarouselFeature>
                    <CarouselFeature image={require('../../../icons/go-food-gm.jpg')} title="Bakmi GM Aeon Mall"></CarouselFeature>
                    <CarouselFeature image={require('../../../icons/go-food-orins.jpg')} title="Martabak Orins"></CarouselFeature>
                    <CarouselFeature image={require('../../../icons/go-food-banka.jpg')} title="Martabak Banka"></CarouselFeature>
                    <CarouselFeature image={require('../../../icons/go-food-pak-boss.jpg')} title="Ayam Bakar Pak Boss"></CarouselFeature>
                </ScrollView>
                <View style={{borderBottomColor: '#e8e9ed', borderBottomWidth: 1, marginTop: 16, marginHorizontal: 16, marginBottom: 20}}></View>
            </View>
        )
}
}

export default ScrollableProducts
