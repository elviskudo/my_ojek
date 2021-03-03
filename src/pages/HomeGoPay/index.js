import React from 'react'
import { View, Text, Image } from 'react-native'
import { withNavigation } from 'react-navigation';
import GopayFeature from '../../components/GopayFeature';

const HomeGoPay = (props) => {
    return (
        <View style={{marginHorizontal: 17, marginTop: 12}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2c5f88', borderTopLeftRadius: 8, borderTopRightRadius: 8, padding: 14}}>
                <Image source={require('../../../icons/gopay.png')}></Image>
                <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>Rp 15.000.000</Text>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2f65bd', borderBottomLeftRadius: 8, borderBottomRightRadius: 8}}>
                <GopayFeature onPress={() => props.navigation.navigate('ScanQRCode')} title="Pay" image={require('../../../icons/pay.png')}></GopayFeature>
                <GopayFeature title="Nearby" image={require('../../../icons/nearby.png')}></GopayFeature>
                <GopayFeature title="Top Up" image={require('../../../icons/topup.png')}></GopayFeature>
                <GopayFeature title="More" image={require('../../../icons/more.png')}></GopayFeature>
            </View>
        </View>
    )
}

export default withNavigation(HomeGoPay)
