import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';


const Goal = props => {

    const goalNameInputHandler = enteredGoalName => {
        setEnteredGoalName(enteredGoalName);
    }

    const [enteredGoalName, setEnteredGoalName] = useState(props.tarefa);
    const [isEditting, setIsEditting] = useState(false);
    
    const editNameTarefa = () => {
        setIsEditting(true)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.tick} onPress={props.modify.bind(this, {day:props.day, isActive:props.status, id:props.id })}>
                {props.status? <Text style={styles.tickText}>✓</Text> : <Text style={styles.plus}> </Text>}
            </TouchableOpacity>
            { isEditting? 
                <TextInput onSubmitEditing={() => {
                    setIsEditting(false)
                    props.modifyNameTarefa({day:props.day, id:props.id, name: enteredGoalName })}}            
                    style={styles.text} onChangeText={goalNameInputHandler} value={enteredGoalName}
                    autoFocus={true} /> 
                :
                <Text onLongPress={editNameTarefa} style={styles.text}>{enteredGoalName}</Text> }
            <TouchableOpacity style={styles.addView} onPress={props.removeGoal.bind(this, {id:props.id, day:props.day})}>
                <Text style={styles.plus}>x</Text>
            </TouchableOpacity>
        </View>
    )
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