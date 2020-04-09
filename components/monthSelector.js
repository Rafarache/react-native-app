import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const MonthSelector = props => {

    const months = ["January", "February", "March", "April", 
                  "May", "June", "July", "August", "September", "October", 
                  "November", "December"];

    return(
        <View style={styles.container} >
            <Button title='<' onPress={props.onSelectedMonth.bind(this, -1)}/>
            <Text style={styles.text}>{months[props.month]}</Text>
            <Button title='>' onPress={props.onSelectedMonth.bind(this, 1)} />
        </View>  
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        borderRadius: 13,
        flexDirection: 'row',
        marginBottom: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 40
    },
    text: {
        flex:1,
        textAlign: 'center',
        fontSize: 20,
    }
})

export default MonthSelector;