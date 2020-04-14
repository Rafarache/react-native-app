import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import DayCalendar from './dayCalendar'

import {formatCalendar} from '../script/formatCalendar'

const Calendar = props => {
    return(
        <View style={styles.calendar}>
            <FlatList
            keyExtractor={(item, index) => item.id.toString()}
            data={formatCalendar(props.month,props.data.days)}
            numColumns={7}
            renderItem={({item}) =>
                <DayCalendar id={item.id} month={props.month} tarefas={item.tarefas}/>
            }
            />     
        </View>
    )
}

const styles = StyleSheet.create({
    calendar: {      
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Calendar;