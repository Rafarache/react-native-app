import React from 'react';
import { StyleSheet , View, Text, TouchableOpacity } from 'react-native';

import DayGoals from "./dayGoals"

const GoalListDay = props => {

    // With bar bellow
    if (((props.name ==="Sun")) && (props.id!== 0)){
        return (
        <View>
            <View style={styles.day} >
                <Text style={styles.dayMounth}>{(props.id + 1).toString()}</Text>
                <Text style={styles.textWeek}>{props.name}</Text>
                <TouchableOpacity style={styles.addView} onPress={props.newTarefa.bind(this, {day:(props.id +1), isActive:true})}>
                    <Text style={styles.plus}>+</Text>
                </TouchableOpacity>
            </View>
            <DayGoals tarefas={props.tarefas} onRemoveGoal={props.removeGoal} day={props.id} />
            <View style={styles.bar}></View>   
        </View>      
        )
    }

    // Without bar bellow
    return(
        <View>
            <View style={styles.day} >
                <Text style={styles.dayMounth}>{(props.id +1 ).toString()}</Text>
                <Text style={styles.textWeek}>{props.name}</Text>
                <TouchableOpacity style={styles.addView} onPress={props.newTarefa.bind(this, {day:(props.id +1), isActive:true})}>
                    <Text style={styles.plus}>+</Text>
                </TouchableOpacity>
            </View>
            <DayGoals tarefas={props.tarefas} onRemoveGoal={props.removeGoal} day={props.id} />
        </View> 
    )
}

const styles = StyleSheet.create({
    day: {
        backgroundColor: '#DF9B6D',
        padding: 8,
        borderRadius: 13,
        marginBottom: 8,
        flexDirection:"row",
    },
    dayMounth: {
        color: "#ffffff",
        fontSize:25,
        marginRight:6,
    },
    textWeek: {
        flex: 1,
        marginTop:11,
        color: "#ffffff",
        opacity: 0.8,
    },
    text: {
        color: "#ffffff",
    },
    bar: {
        height: 5,
        marginBottom: 8,
        marginHorizontal: 60,
        flex: 1,
        backgroundColor: '#000000',
        borderRadius: 6
    },
    addView: {
        marginTop: 5,
        marginRight: 4,
        height: 25,
        width: 25,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ffffff',
        justifyContent: 'center', 
        alignItems: 'center' ,
    },
    plus: {
        marginBottom: 2,
        color: "#ffffff",
        fontSize: 25,
    },
})

export default GoalListDay;