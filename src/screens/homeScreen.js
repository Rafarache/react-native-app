import React, {Component} from 'react';

import { AsyncStorage} from 'react-native';

//CONSTANTS
//

//COMPONENTS
import {ScreenContainer} from '../themes/screen'

//ASYNC STORAGE
//

export default class HomeScreen extends Component {

    constructor () {
        super();
        this.state = {
            toDo: []
        };
    }

    componentWillMount() {
        this.load('@ToDo')
    }

    componentWillUnmount() {

    }

    //  Load data
    load = async (key) => {
        try {
            const item = await AsyncStorage.getItem(key)
            if (item !== null) {
                this.setState({
                    toDo: item,
                })
            }
        } catch (e) {
          console.error('Failed to load .')
        }
    }

    render () {

        return (
            <ScreenContainer >
                
            </ScreenContainer>
            );
        }
    }