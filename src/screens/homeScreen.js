import React, {Component} from 'react';
import { AsyncStorage} from 'react-native';

//  CONSTANTS
//

//  COMPONENTS
import {ScreenContainer} from '../themes/screen'
import ToDo_Month from '../components/ToDo/toDo_Month'

//  ASYNC STORAGE
//

//  SCRIPTS
import {generateMonthToDo} from '../script/generateMonthToDo'

export default class HomeScreen extends Component {

    constructor () {
        super();
        this.state = {
            toDo: [{name: 'asas', id:1, status:true, day:1},{name: 'asas', id:2, status:true, day:0}]
        };
    }

    componentWillMount() {
        this.load('@ToDo')
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
        console.log('aaa')
        return (
            <ScreenContainer >
                <ToDo_Month month={generateMonthToDo(5,this.state.toDo)} />
            </ScreenContainer>
            );
        }
    }