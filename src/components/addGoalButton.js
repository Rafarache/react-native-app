import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';


const AddGoalButton = props => {
    
    return (
        <TouchableOpacity 
        style={styles.button}
        activeOpacity= {1}        
        onPress={props.onAddGoal.bind(this, true)}>
            <Text style={styles.text}>...</Text>
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#ffffff',
        fontSize: 60,
        marginBottom: 40,
    }
})

export default AddGoalButton;