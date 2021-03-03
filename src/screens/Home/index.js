import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import BannerFeature from '../../../src/components/BannerFeature';
import InfoFeature from '../../../src/components/InfoFeature';
import MainFeature from '../../../src/components/MainFeature';
import NewsFeature from '../../../src/components/NewsFeature';
import SearchFeature from '../../../src/components/SearchFeature';
import Navbar from '../../../src/pages/Navbar';
import ScrollableProducts from '../../../src/pages/ScrollableProducts';
import HomeGoPay from '../../pages/HomeGoPay';

class Home extends Component {
    render () {
        return (
            <View style={{flex: 1}}>
                <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
                    {/* search bar */}
                    <SearchFeature image_search={require('../../../icons/search.png')} image_promo={require('../../../icons/promo.png')}></SearchFeature>
                    {/* promo */}
                    <HomeGoPay></HomeGoPay>
                    {/* main feature */}
                    <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 18}}>
                        <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18}}>
                            <MainFeature title="GO-RIDE" image={require('../../../icons/go-ride.png')}></MainFeature>
                            <MainFeature title="GO-CAR" image={require('../../../icons/go-car.png')}></MainFeature>
                            <MainFeature title="GO-BLUEBIRD" image={require('../../../icons/go-bluebird.png')}></MainFeature>
                            <MainFeature title="GO-SEND" image={require('../../../icons/go-send.png')}></MainFeature>
                        </View>
                        <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18}}>
                            <MainFeature title="GO-DEALS" image={require('../../../icons/go-deals.png')}></MainFeature>
                            <MainFeature title="GO-PULSA" image={require('../../../icons/go-pulsa.png')}></MainFeature>
                            <MainFeature title="GO-FOOD" image={require('../../../icons/go-food.png')}></MainFeature>
                            <MainFeature title="MORE" image={require('../../../icons/go-more.png')}></MainFeature>
                        </View>
                    </View>
                    <View style={{height: 17, backgroundColor: '#f2f2f4', marginTop: 20}}></View>
                    {/* news */}
                    <NewsFeature onPress={() => this.props.navigation.navigate('Order')}></NewsFeature>
                    {/* internal information */}
                    <InfoFeature title="Complete your profile"></InfoFeature>
                    {/* gofood banner */}
                    <BannerFeature title="Free GO-FOOD voucher" caption="Quick, before they run out!"></BannerFeature>
                    {/* nearby */}
                    <ScrollableProducts></ScrollableProducts>
                </ScrollView>
                {/* app bar */}
                <Navbar></Navbar>
            </View>
        )
    }
}

export default Home;