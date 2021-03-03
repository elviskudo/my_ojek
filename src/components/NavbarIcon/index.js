import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

const NavbarIcon = (props) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={props.onPress}>
                <Image style={{width: 26, height: 26}} source={props.active ? props.image_active : props.image}></Image>
                <Text style={{fontSize: 10, fontWeight: 'bold', color: 'green', marginTop: 4, color: props.active ? '#43ab4a' : '#545454'}}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NavbarIcon;