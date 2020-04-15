import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { findDayColor } from '../script/findDayColor';

const DayCalendar = props => {

    let color = '#FFFFFF'
    let colorBackground = findDayColor(props.tarefas)
    if (colorBackground == 0) {
        color= '#FFFFFF'
    }
    else if  (colorBackground === 1) {
        color= '#FF0000'
    }
    else if (colorBackground === 2){
        color= '#FFFF00'
    }
    else if (colorBackground == 3){
        color= '#00a200'
    }

    var today = new Date();
    let border = 0
    if (today.getMonth() === props.month && props.id === today.getDate() -1 ){
        border=2;
    }


    if( props.id !==false ){
        return(
            <View style={{width: 30,
                height: 30,
                margin: 5,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: color,
                borderRadius: 10,
                borderWidth: border,
                borderColor: '#000000'
                }}>
                <Text style={styles.text}>{props.id + 1}</Text>
            </View>
        )              
    }
    else{
        return(
            <View style={styles.box}>
            </View>
        )      
    }
    
}

const styles = StyleSheet.create({
    box: {
        width: 20,
        height: 20,
        margin:10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#000000'
    },
})

export default DayCalendar;