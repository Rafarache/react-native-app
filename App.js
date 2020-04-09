import React, { useState } from 'react';
import { View , StyleSheet, StatusBar} from 'react-native';

import GoalList from './components/goalsList';
import AddGoalButton from './components/addGoalButton';
import GoalInput from "./components/goalInput"
import MonthSlector from './components/monthSelector'

import {initCalendar} from './script/initYear';
import {validTarefa} from './script/validTarefa';

export default function App() {

  var today = new Date();
  date=today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+ today.getFullYear();
  var counterTarefas = 0;

  let newCalendario = initCalendar()

  const [ calendar, setCalendar ] = useState(newCalendario);  
  const [ isAddMode, setIsAddMode ] = useState(false);
  const [ currentMonth, setCurrentMonth ] = useState(today.getMonth());
  const [ counterTarefa, setCounterTarefa ] = useState(0);
  const [ newTarefaInfo, setNewTarefaInfo ] = useState({day:"1",month:"1",isActive: false});

  const ableGoalHandler = () => {
    if(isAddMode === true){
      resetNewTarefa()
    }
    setIsAddMode(!isAddMode)
  }

  const addGoalHandler = props => {
    if (validTarefa(props) === true){
      var updateCalendar = calendar;
      updateCalendar[parseInt(props.month,10)-1].days[(parseInt(props.day,10))-1].tarefas = [...calendar[(parseInt(props.month,10))-1].days[(parseInt(props.day,10))-1].tarefas, {tarefaName: props.name, id: counterTarefa}]
      setCalendar(updateCalendar);
      setIsAddMode(false);
      setCounterTarefa(counterTarefa + 1)
      setNewTarefaInfo({day:"1",month:"1",isActive: false})  
    }
  }

  const removeGoalHandler = props => {
    var aux = calendar;
    aux[currentMonth].days[props.day].tarefas = aux[currentMonth].days[props.day].tarefas.filter((goal) =>goal.id !== props.id);
    setNewTarefaInfo({day:"1",month:"1",isActive: false}) 
    setCalendar(aux)
  }

  const resetNewTarefa = () => {
    setNewTarefaInfo({day:"1",month:"1",isActive: false})  
  }

  const passInfoNewTarefa = props => {
    let changeTo = {day:props.day, month:(currentMonth+1), isActive:props.isActive}
    setNewTarefaInfo(changeTo)
    ableGoalHandler(isAddMode)
  }

  const selectedMonthHandler = way => {
    if (way === 1) {
      if (currentMonth !== 11) {
       setCurrentMonth(currentMonth + 1)        
      }
    }
    else{
      if (currentMonth !== 0) {
        setCurrentMonth(currentMonth -1 )
      }
    }
  }

  return(
    <View style={styles.screen}>
        <MonthSlector month={currentMonth} onSelectedMonth={selectedMonthHandler}/>
        <GoalInput visible={isAddMode} ableAddGoal={ableGoalHandler} onAddGoal={addGoalHandler} info={newTarefaInfo} modify={passInfoNewTarefa} />
        <GoalList calendarData={calendar[currentMonth]} newTarefa={passInfoNewTarefa} onRemoveGoal={removeGoalHandler} />
        <AddGoalButton onAddGoal={ableGoalHandler}  />
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        paddingTop: 24,
        paddingHorizontal: 10,
        paddingBottom: 40,
    }
})
