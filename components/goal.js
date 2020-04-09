import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Goal = props => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.tarefa}</Text>   
            <TouchableOpacity style={styles.addView} onPress={props.removeGoal.bind(this, {id:props.id, day:props.day})}>
                <Text style={styles.plus}>x</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    text: {
        color: "#ffffff",
        width:'91%',
        marginRight:4,
        fontSize: 18,
    },
    container: {
        width: '100%',
        flexDirection: "row",
    },
    addView: {
        height: 25,
        width: 25,
        borderRadius: 10,
        borderWidth: 2,
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