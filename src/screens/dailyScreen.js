import React, {Component} from 'react';

//  ASYNC STORAGE
import { AsyncStorage } from 'react-native';
import StoreData from '../async-storage/_storeData'

//  COMPONENTS
import {ScreenContainer} from '../themes/screen'
import ToDo_List from '../components/ToDo/toDo_List'
import AddButton from '../components/AddButton/addButton'


//  CONTEXT
import {ContextProvider} from '../context/context';

export default class DailyScreen extends Component {

    constructor () {
        super();
        this.state = {
            toDo: [],
            counter: 0,
            month : 0,
            day: 0,
        };

        //  Bind handle functions
        this.handleAddToDo = this.handleAddToDo.bind(this)
        this.handleRemoveToDo = this.handleRemoveToDo.bind(this)
        this.handleRenameToDo = this.handleRenameToDo.bind(this)
        this.handleChangeStatusToDo = this.handleChangeStatusToDo.bind(this)
    }

    componentDidUpdate() {
        StoreData._storeData(this.state.toDo,'@DailyToDo')
        console.log(this.state)
    }

    componentWillMount() {
        this.load()
        let today = new Date();
        this.setState({date: today})
        let month =  parseInt(today.getMonth())
        this.setState({month: month})
        let day =  parseInt(today.getDate() - 1)
        this.setState({day: day})
        // Reset status if its a new day
        if (this.checkNewDay() === false) {
            this.resetToDoStatus()
        }
    }

    //  Load data used in component
    load = async () => {
        try {
            let item = await AsyncStorage.getItem('@DailyToDo')
            if (item !== null) {
                item = JSON.parse(item)
                this.setState({
                    toDo: item
                })
            }
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


    resetToDoStatus() {
        let updateToDo = this.state.toDo.map(function(item) {
            item.status = false
            return item
        })
        this.setState({toDo: updateToDo})
    }

    // Check if there is an toDo task already checked today
    checkNewDay() {
        let flag = false
        let date = this.state.date
        this.state.toDo.forEach(function(item, index) {
            if(item.completedDates.length !== 0) {
                if(item.completedDates.slice(-1)[0].getDate === date.getDate && item.completedDates.slice(-1)[0].getMonth === date.getMonth) {
                    flag = true;
                }
            }
        });
        
        return flag
    }

    //  Handle add new ToDo
    handleAddToDo(toDo) {
        let newToDo = this.state.toDo
        // Delete day and month prooerty, witch wont be used
        delete toDo.day
        delete toDo.month
        // Add CompletedDates array property
        // This property stores the days the task was done
        toDo.completedDates = []
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
        StoreData._storeData(newToDo,'@DailyToDo')
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

    //  Handle if the toDo being checked or unchecked
    handleChangeStatusToDo(id) {
        let updateToDo = this.state.toDo.filter(function(item) {
            if (item.id == id) {
                item.status = !item.status
                let today = new Date
                if (item.status){
                    item.completedDates.push(today)                    
                }
                else {
                    item.completedDates.pop()
                }
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
                    {this.state.toDo.length === 0?
                        null:
                        <ToDo_List toDo_Array={this.state.toDo} />
                    }
                    
                    <AddButton />
                </ContextProvider>
            </ScreenContainer>
            );
        }
    }