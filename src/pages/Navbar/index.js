import React, { Component } from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import NavbarIcon from '../../../src/components/NavbarIcon';

export class Navbar extends Component {
    render() {
        return (
            <View style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
                <NavbarIcon onPress={() => this.props.navigation.navigate('Home')} image={require('../../../icons/home.png')} title="Home" image_active={require('../../../icons/home-active.png')} active></NavbarIcon>
                <NavbarIcon onPress={() => this.props.navigation.navigate('Inbox')} image={require('../../../icons/inbox.png')} title="Inbox" image_active={require('../../../icons/inbox-active.png')}></NavbarIcon>
                <NavbarIcon onPress={() => this.props.navigation.navigate('Order')} image={require('../../../icons/order.png')} title="Orders" image_active={require('../../../icons/order-active.png')}></NavbarIcon>
                <NavbarIcon onPress={() => this.props.navigation.navigate('Help')} image={require('../../../icons/help.png')} title="Help" image_active={require('../../../icons/help-active.png')}></NavbarIcon>
                <NavbarIcon onPress={() => this.props.navigation.navigate('Account')} image={require('../../../icons/account.png')} title="Account" image_active={require('../../../icons/account-active.png')}></NavbarIcon>
            </View>
        )
    }
}

export default withNavigation(Navbar)
