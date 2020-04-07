import React, { useState } from 'react';
import { View , StyleSheet, Button} from 'react-native';

import GoalList from './components/goalsList';
import AddGoalButton from './components/addGoalButton';

import {initCalendar} from './script/initYear';



export default function App() {

  var today = new Date();
  date=today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+ today.getFullYear();
  console.log(date);  

  const months = ["January", "February", "March", "April", 
                  "May", "June", "July", "August", "September", "October", 
                  "November", "December"];
 
    const weekDays =["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let counter = 0;
    var newCalendario = [];

    var nnn = initCalendar();

    console.log(nnn[0].name)

    for (var i=0; i<12; i++) {
        
      newCalendario = [...newCalendario, {}];
      var daysArray = [];

      for (var y=0; y<nDays[i]; y++){
          daysArray=[...daysArray, {day:weekDays[counter], tarefas:{}, id:y} ];

          if (counter === 6) {
              counter = 0;
          }
          else{
              counter++;  
          }
      }
      newCalendario[i] = {name:months[i], days:daysArray};
        
    }

    const [ calendar, setCalendar ] = useState(newCalendario);     
    const cale = () => {
        /// setCalendar(calendar => calendar=newCalendario);
        console.log(calendar);
    }

  return(
    <View style={styles.screen}>
        <GoalList calendarData={calendar[0]} />
        <AddGoalButton/>
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        padding: 15,
    }
})
