import React, { useState } from 'react';
import { View , StyleSheet, AsyncStorage, ScrollView} from 'react-native';

import GoalList from './components/goalsList';
import AddGoalButton from './components/addGoalButton';
import GoalInput from "./components/goalInput"
import MonthSlector from './components/monthSelector'
import Calendar from './components/calendar'

import {initCalendar} from './script/initYear';
import {validTarefa} from './script/validTarefa';

export default function App() {
  

  var today = new Date();
  date=today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+ today.getFullYear();


  retrieveData = () => {
    console.log("Getting data...")
    AsyncStorage.getItem('data')
  .then((value)=>{
    const user = JSON.parse(value);
    if (user === null){
      console.log("Data is empty")
      return null}
    else {
      console.log("Data calendar obtained !!")}
      setCalendar(user)
      // Uncomment to reset calendar data 
      // setCalendar(initCalendar())
    }
  )
  .catch((error)=>{
  console.log(error);
  })
  }

  retrieveCounter = () => {
    console.log("Getting data...")
    AsyncStorage.getItem('counter')
  .then((value)=>{
    const user = JSON.parse(value);
    if (user === null){
      console.log("Data is empty")
      return null}
    else {
      console.log("Data counter obtained !!")}
      console.log(user)
      setCounterTarefa(parseInt(user))
    }
  )
  .catch((error)=>{
  console.log(error);
  })
  }

  const [ firstTest, setFirstTest ] = useState(false); 
  const [ calendar, setCalendar ] = useState(initCalendar());  
  const [ isAddMode, setIsAddMode ] = useState(false);
  const [ currentMonth, setCurrentMonth ] = useState(today.getMonth());
  const [ counterTarefa, setCounterTarefa ] = useState(0);
  const [ newTarefaInfo, setNewTarefaInfo ] = useState({day:"1",month:"1",isActive: false});

  
  if (firstTest === false){
    if ( retrieveData() === null) {
      AsyncStorage.setItem('data', JSON.stringify(newCalendario))
      .then(()=>{
      console.log('Calendar saved');
      })
      .catch((error)=>{
      console.log(error);
      }) 
    }
    if ( retrieveCounter() === null) {
      AsyncStorage.setItem('counter', JSON.stringify(counterTarefa))
      .then(()=>{
      console.log('Counter saved');
      })
      .catch((error)=>{
      console.log(error);
      }) 
    }
    setFirstTest(true)
    // setCalendar(initCalendar())
  }

  const ableGoalHandler = () => {
    if(isAddMode === true){
      resetNewTarefa()
    }
    setIsAddMode(!isAddMode)
  }

  const addGoalHandler = props => {
    if (validTarefa(props) === true){
      var updateCalendar = calendar;
      updateCalendar[parseInt(props.month,10)-1].days[(parseInt(props.day,10))-1].tarefas = [...calendar[(parseInt(props.month,10))-1].days[(parseInt(props.day,10))-1].tarefas, {tarefaName: props.name, id: counterTarefa, isActive:false}]
      setCalendar(updateCalendar);
      setIsAddMode(false);
      setCounterTarefa(counterTarefa + 1)
      setNewTarefaInfo({day:"1",month:"1",isActive: false})  
      AsyncStorage.setItem('data', JSON.stringify(updateCalendar))
      .then(()=>{
      console.log('Calendar saved');
      })
      .catch((error)=>{
      console.log(error);
      })
      AsyncStorage.setItem('counter', JSON.stringify(counterTarefa +1))
      .then(()=>{
      console.log('Counter saved');
      })
      .catch((error)=>{
      console.log(error);
      })
    }
  }

  const removeGoalHandler = props => {
    var aux = calendar;
    aux[currentMonth].days[props.day].tarefas = aux[currentMonth].days[props.day].tarefas.filter((goal) =>goal.id !== props.id);
    setNewTarefaInfo({day:"1",month:"1",isActive: false}) 
    setCalendar(aux)
    AsyncStorage.setItem('data', JSON.stringify(aux))
    .then(()=>{
    console.log('data saved');
    })
    .catch((error)=>{
    console.log(error);
    }) 
  }
  
  const updateNameTarefa = props => {

    var aux = calendar;
    var length = aux[currentMonth].days[props.day].tarefas.length
    for (var i = 0;i<length;i++) {
      if (aux[currentMonth].days[props.day].tarefas[i].id === props.id){     
        aux[currentMonth].days[props.day].tarefas[i].tarefaName = props.name;}
    }
    setCalendar(aux);
    AsyncStorage.setItem('data', JSON.stringify(aux))
    .then(()=>{
    console.log('data saved');
    })
    .catch((error)=>{
    console.log(error);
    }) 
  }

  const modifyGoal = props => {
    var aux = calendar;
    aux[currentMonth].days[props.day].tarefas = aux[currentMonth].days[props.day].tarefas.map(function(tarefa) {
      var aux = tarefa;
      if (props.id === tarefa.id){
        aux.isActive = !aux.isActive;
        return aux;
      }
      else {
        return aux;
      }
    })
    setCalendar(aux)
    setNewTarefaInfo({day:"1",month:"1",isActive: false}) 
    AsyncStorage.setItem('data', JSON.stringify(aux))
    .then(()=>{
    console.log('data saved');
    })
    .catch((error)=>{
    console.log(error);
    }) 
  }

  const resetNewTarefa = () => {
    setNewTarefaInfo({day:"1",month:"1",isActive: false})  
  }

  const resetCalndar = () => {
    let resetCalendario = initCalendar()
    setCalendar(resetCalendario)
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
      <Calendar data={calendar[currentMonth]} month={currentMonth} addtarefa={passInfoNewTarefa}/>
      <MonthSlector month={currentMonth} onSelectedMonth={selectedMonthHandler}/>
      <GoalInput visible={isAddMode} ableAddGoal={ableGoalHandler} onAddGoal={addGoalHandler} info={newTarefaInfo} modify={passInfoNewTarefa} />
      <GoalList calendarData={calendar[currentMonth]} newTarefa={passInfoNewTarefa} onRemoveGoal={removeGoalHandler} modifyTarefa={modifyGoal} modifyNameTarefa={updateNameTarefa}/>
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
        paddingBottom: 0,
    }
})
