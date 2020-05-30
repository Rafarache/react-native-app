import React, {Component} from 'react';
import { AsyncStorage} from 'react-native';

//  CONSTANTS
//

//  COMPONENTS
import {ScreenContainer} from '../themes/screen'
import ToDo_Month from '../components/ToDo/toDo_Month'
import MonthSelector from '../components/MonthSelector/monthSelector'


//  CONTEXT
import {ContextProvider} from '../context/context'

//  ASYNC STORAGE
//


//  SCRIPTS
import {generateMonthToDo} from '../script/generateMonthToDo'
import {validChangeMonth} from '../script/validChangeMonth'
import { add } from 'react-native-reanimated';

//  CONTEXT
let Context = React.createContext();

export default class HomeScreen extends Component {

    constructor () {
        super();
        this.state = {
            toDo: [],
            month: 0
        };
        this.handleChangeMonth = this.handleChangeMonth.bind(this)
        this.handleAddToDo = this.handleAddToDo.bind(this)
        this.handleRemoveToDo = this.handleRemoveToDo.bind(this)


    }

    componentWillMount() {
        ///this.load('@ToDo')
        this.setState({toDo: [{name: 'asas', id:1, status:true, day:1, month:2},{name: 'asas', id:2, status:true, day:0, month: 4}]})
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

    handleAddToDo(toDo) {
        let newToDo = this.state.toDo
        newToDo.push(toDo)
    }

    handleRemoveToDo(toDo_id) {
        let newToDo = this.state.toDo
        newToDo = newToDo.filter(function(item) {
            return item.id != toDo_id
        })
        console.log(newToDo)
        this.setState({toDo: newToDo})
    }

    render () {
        return (
            <ScreenContainer >
                <ContextProvider
                    handleAddToDo={this.handleAddToDo}
                    handleRemoveToDo={this.handleRemoveToDo}
                >
                    <MonthSelector 
                        month={this.state.month}
                        handleChangeMonth={this.handleChangeMonth}
                    />
                    <ToDo_Month
                        month={generateMonthToDo(this.state.month,this.state.toDo)}
                    />
                </ContextProvider>
            </ScreenContainer>
            );
        }
    }