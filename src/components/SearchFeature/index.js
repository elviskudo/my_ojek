import React from 'react';
import { View, TextInput, Image } from 'react-native';

const SearchFeature = (props) => {
    return (
        <View style={{marginHorizontal: 17, flexDirection: 'row', paddingTop: 20}}>
            <View style={{position: 'relative', flex: 1}}>
                <TextInput placeholder="What do you want to eat?" style={{borderWidth: 1, borderColor: '#e8e8e8', backgroundColor: 'white', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20}}></TextInput>
                <Image source={props.image_search} style={{position: 'absolute', top: 7, left: 12}}></Image>
            </View>
            <View style={{width: 35, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={props.image_promo}></Image>
            </View>
        </View>
    )
}

export default SearchFeature;