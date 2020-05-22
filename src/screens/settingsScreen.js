import React, {Component} from 'react';

import { Text, View } from 'react-native';

export default class SettingScreen extends Component {

    constructor () {
        super();
        this.state = {
        };
    }


    render () {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Setting_Screen</Text>
        </View>
        );
    }
}