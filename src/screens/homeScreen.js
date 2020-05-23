import React, {Component} from 'react';

import styled from 'styled-components/native'
import { Text, View, AsyncStorage, TextInput} from 'react-native';

// import SaveData from '../async-storage/_storeData'
// SaveData._storeData('Home','@String')

export default class HomeScreen extends Component {

    constructor () {
        super();
        this.state = {
            string: ''
        };
    }

    componentWillMount() {
        this.load('@String')
    }

    componentWillUnmount() {

    }

    load = async (key) => {
        try {
            const name = await AsyncStorage.getItem(key)
            if (name !== null) {
                this.setState({
                    string: name,
                    name: ''
                })
            }
        } catch (e) {
          console.error('Failed to load .')
        }
    }

    render () {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{this.state.string}</Text>
            </View>
            );
        }
    }