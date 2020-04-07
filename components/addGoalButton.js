import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';


const AddGoalButton = () => {

    const addGoalHandler = () => {
        console.log('botao funfando')
    }

    return (
        <TouchableOpacity 
        style={styles.button}
        activeOpacity= {0.9}        
        onPress={addGoalHandler}>
    
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 60,
        position: "absolute",
        backgroundColor: '#AF1B3F',
        borderRadius: 30,
        right: 20,
        bottom: 20,
    },
})

export default AddGoalButton;