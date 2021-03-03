import React from 'react'
import { Button, Text, View } from 'react-native'
import Navbar from '../../../src/pages/Navbar'

const Order = (props) => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Text>Order here</Text>
                <Button title="Go to Detail" onPress={() => props.navigation.navigate('OrderDetail')}>Go to Detail</Button>
            </View>
            <Navbar></Navbar>
        </View>
    )
}

export default Order