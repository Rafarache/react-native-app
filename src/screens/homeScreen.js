import React, {Component} from 'react';

import { Text, View, AsyncStorage} from 'react-native';

// import SaveData from '../async-storage/_storeData'
// SaveData._storeData('Home','@String')


export default class HomeScreen extends Component {

    constructor () {
        super();
        this.state = {
            string: 'oi'
        };
    }

    componentWillMount() {
        this.load('@String')
    }

    load = async (key) => {
        try {
            const name = await AsyncStorage.getItem(key)
            if (name !== null) {
                this.setState({string: name})
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