import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { RNCamera } from 'react-native-camera'
import Navbar from '../../pages/Navbar'

const IconWithText = (props) => {
    return (
        <View>
            <View style={{width: 60, height: 60, backgroundColor: 'green', borderRadius: 80}}></View>
            <Text style={{maxWidth: 70, textAlign: 'center', marginTop: 10}}>{props.title}</Text>
        </View>
    )
}

const IconAction = () => {
    return (
        <View style={{width: 35, height: 35, backgroundColor: 'white', borderRadius: 35}}></View>
    )
}

class ScanQRCode extends Component {
    state = {
        barcode: 'More Options'
    }

    render () {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor: 'grey'}}>
                    <RNCamera
                        ref={(ref) => {
                            this.camera = ref;
                        }}
                        style={{
                            width: '100%',
                            height: '100%',
                            flex: 1,
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                        }}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.on}
                        androidCameraPermissionOptions={{
                            title: 'Permission to use camera',
                            message: 'We need your permission to use your camera',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        androidRecordAudioPermissionOptions={{
                            title: 'Permission to use audio recording',
                            message: 'We need your permission to use your audio',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        onBarCodeRead={(barcode) => {
                            console.log(barcode);
                            this.setState({
                                barcode: barcode.data
                            })
                        }}
                    />
                    <View style={{
                        flexDirection: 'row', 
                        paddingHorizontal: 16, 
                        marginTop: 16, 
                        justifyContent: 'space-between',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%'
                    }}>
                        <IconAction></IconAction>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 80}}>
                            <IconAction></IconAction>
                            <IconAction></IconAction>
                        </View>
                    </View>
                </View>
                <View style={{height: 200, backgroundColor: 'white', paddingHorizontal: 16, flex: 1}}>
                    <View style={{alignItems: 'center', marginTop: 8, marginBottom: 18}}>
                        <View style={{width: 50, height: 4, backgroundColor: '#e0e0e0', marginVertical: 2}}></View>
                        <View style={{width: 50, height: 4, backgroundColor: '#e0e0e0', marginVertical: 2}}></View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={{fontSize: 24, fontWeight: 'bold'}}>{this.state.barcode}</Text>
                        <Text style={{fontSize: 14, color: '#61a756', fontWeight: 'bold'}}>SHORCUT</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 14, width: '100%'}}>
                        <View style={{flexDirection: 'row', alignItems: 'flex-start', width: 160, justifyContent: 'space-between', paddingRight: 12}}>
                            <IconWithText title="Phone Number"></IconWithText>
                            <IconWithText title="Go Pay code"></IconWithText>
                        </View>
                        <View style={{width: 1, height: 60, backgroundColor: 'grey'}}></View>
                        <View style={{flex: 1, paddingLeft: 12}}>
                            <Text>Your recent Go Pay receiver will show here. No admin fees</Text>
                        </View>
                    </View>
                </View>
                <Navbar></Navbar>
            </View>
        )
    }
}
    
export default ScanQRCode
