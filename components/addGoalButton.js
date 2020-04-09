import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';


const AddGoalButton = props => {
    
    return (
        <TouchableOpacity 
        style={styles.button}
        activeOpacity= {1}        
        onPress={props.onAddGoal.bind(this, true)}>
    
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
        right: 15,
        bottom: 15,
    },
})

export default AddGoalButton;