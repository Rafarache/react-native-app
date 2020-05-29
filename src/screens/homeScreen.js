import React, {Component} from 'react';
import { AsyncStorage} from 'react-native';

//  CONSTANTS
//

//  COMPONENTS
import {ScreenContainer} from '../themes/screen'
import ToDo_Month from '../components/ToDo/toDo_Month'
import MonthSelector from '../components/MonthSelector/monthSelector'

//  ASYNC STORAGE
//

//  SCRIPTS
import {generateMonthToDo} from '../script/generateMonthToDo'
import {validChangeMonth} from '../script/validChangeMonth'

export default class HomeScreen extends Component {

    constructor () {
        super();
        this.state = {
            toDo: [],
            month: 0
        };
        this.handleChangeMonth = this.handleChangeMonth.bind(this)
    }

    componentWillMount() {
        ///this.load('@ToDo')
        this.setState({toDo: [{name: 'asas', id:1, status:true, day:1, month:2},{name: 'asas', id:2, status:true, day:0, month: 1}]})
        //  Set initial month as the users calendar current month
        let today = new Date();
        let month =  parseInt(today.getMonth())
        this.setState({month: month})
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
    
    //  Handle the change of month the user has on screen
    handleChangeMonth(number) {
        let nextNumber = this.state.month + number;

        //  Check if the next month exist ( not before Jan or after Dec)
        if (validChangeMonth(nextNumber)) {
            this.setState({month: nextNumber})
        }
    }

    render () {
        console.log(this.state.month)
        return (
            <ScreenContainer >
                <MonthSelector 
                    month={this.state.month}
                    handleChangeMonth={this.handleChangeMonth}
                />
                <ToDo_Month
                    month={generateMonthToDo(this.state.month,this.state.toDo)}
                />
            </ScreenContainer>
            );
        }
    }