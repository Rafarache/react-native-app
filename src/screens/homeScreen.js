import React, {Component} from 'react';

//  ASYNC STORAGE
import { AsyncStorage } from 'react-native';
import StoreData from '../async-storage/_storeData'

//  COMPONENTS
import {ScreenContainer} from '../themes/screen'
import ToDo_Month from '../components/ToDo/toDo_Month'
import MonthSelector from '../components/MonthSelector/monthSelector'
import Calendar from '../components/Calendar/calendar'


//  CONTEXT
import {ContextProvider} from '../context/context'

//  SCRIPTS
import {generateMonthToDo} from '../script/generateMonthToDo'
import {validChangeMonth} from '../script/validChangeMonth'

//  CONTEXT
let Context = React.createContext();

export default class HomeScreen extends Component {

    constructor () {
        super();
        this.state = {
            toDo: [],
            month: 0,
            counter: 0
        };

        //  Bind handle functions
        this.handleChangeMonth = this.handleChangeMonth.bind(this)
        this.handleAddToDo = this.handleAddToDo.bind(this)
        this.handleRemoveToDo = this.handleRemoveToDo.bind(this)
        this.handleRenameToDo = this.handleRenameToDo.bind(this)
        this.handleChangeStatusToDo = this.handleChangeStatusToDo.bind(this)
    }

    componentDidUpdate() {
        StoreData._storeData(this.state.toDo,'@ToDo')
    }

    componentWillMount() {
        this.load()
        //  Set initial month as the users calendar current month
        let today = new Date();
        let month =  parseInt(today.getMonth())
        this.setState({month: month})
    }

    //  Load data
    load = async () => {
        try {
            let item = await AsyncStorage.getItem('@ToDo')
            if (item !== null) {
                item = JSON.parse(item)
                this.setState({
                    toDo: item
                })
            }
            console.log(this.state)
        } catch (e) {
          console.error('Failed to load .')
        }
        try {
            let item = await AsyncStorage.getItem('@ToDo_Counter')
            if (item !== null) {
                item = JSON.parse(item)
                console.log(item)
                this.setState({
                    counter: item
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

    //  Handle add new ToDo
    handleAddToDo(toDo) {
        let newToDo = this.state.toDo
        newToDo.push(toDo)
        this.setState({toDo: newToDo})
        StoreData._storeData(this.state.counter + 1,'@ToDo_Counter')
        this.setState({counter: this.state.counter + 1})        
    }

    //  Handle remove toDo
    handleRemoveToDo(toDo_id) {
        let newToDo = this.state.toDo
        newToDo = newToDo.filter(function(item) {
            return item.id != toDo_id
        })
        this.setState({toDo: newToDo})
        StoreData._storeData(newToDo,'@ToDo')
    }

    //  Handle if the name of a ToDo is being updated
    handleRenameToDo(name,id) {
        let updateToDo = this.state.toDo.filter(function(item) {
            if (item.id == id) {
                item.name = name
            }
            return item
        })
        this.setState({toDo: updateToDo})
    }

    handleChangeStatusToDo(id) {
        let updateToDo = this.state.toDo.filter(function(item) {
            if (item.id == id) {
                item.status = !item.status
            }
            return item
        })
        this.setState({toDo: updateToDo})
    }

    render () {
        return (
            <ScreenContainer >
                <ContextProvider
                    handleAddToDo={this.handleAddToDo}
                    handleRemoveToDo={this.handleRemoveToDo}
                    handleRenameToDo={this.handleRenameToDo}
                    handleChangeStatusToDo={this.handleChangeStatusToDo}
                    getMonth={this.state.month}
                    getCounter={this.state.counter}
                >
                    <Calendar
                        month={generateMonthToDo(this.state.month,this.state.toDo)}
                    />
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