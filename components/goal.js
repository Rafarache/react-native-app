import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Goal = props => {
    if (props.status === false){
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.tick} onPress={props.modify.bind(this, {day:props.day, isActive:props.status, id:props.id })}>
                    <Text style={styles.plus}> </Text>
                </TouchableOpacity>
                <Text style={styles.text}>{props.tarefa}</Text>   
                <TouchableOpacity style={styles.addView} onPress={props.removeGoal.bind(this, {id:props.id, day:props.day})}>
                    <Text style={styles.plus}>x</Text>
                </TouchableOpacity>
            </View>
        )
    }
    else{
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.tick} onPress={props.modify.bind(this, {day:props.day, isActive:props.status, id:props.id })}>
                    <Text style={styles.tickText}>✓</Text>
                </TouchableOpacity>
                <Text style={styles.text}>{props.tarefa}</Text>   
                <TouchableOpacity style={styles.addView} onPress={props.removeGoal.bind(this, {id:props.id, day:props.day})}>
                    <Text style={styles.plus}>x</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: "#ffffff",
        width:'79%',
        marginRight:4,
        fontSize: 18,
        marginTop: 1,
    },
    container: {
        width: '100%',
        flexDirection: "row",
    },
    tick:{
        height: 30,
        width: 30,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#ffffff',
        justifyContent: 'center', 
        alignItems: 'center' ,
        marginRight:8,
    },
    tickText : {
        marginBottom: 15,
        marginLeft: 2,
        color: "#ffffff",
        fontSize: 30,
    },
    addView: {
        height: 25,
        width: 25,
        borderRadius: 10,
        borderWidth: 2,
        marginTop:1,
        borderColor: '#ffffff',
        justifyContent: 'center', 
        alignItems: 'center' ,
        opacity: 0.3,
    },
    plus: {
        marginBottom: 6,
        color: "#ffffff",
        fontSize: 22,
    },
})

export default Goal;