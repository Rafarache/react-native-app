import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Goal = props => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.tarefa}</Text>            
        </View>

    )
}

const styles = StyleSheet.create({
    text: {
        color: "#ffffff",
    },
    container: {
        width: '100%'
    }
})

export default Goal;