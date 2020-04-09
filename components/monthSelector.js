import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const MonthSelector = props => {

    const months = ["January", "February", "March", "April", 
                  "May", "June", "July", "August", "September", "October", 
                  "November", "December"];

    return(
        <View style={styles.container} >
            <TouchableOpacity style={styles.addView} onPress={props.onSelectedMonth.bind(this, -1)}>
                <Text style={styles.plus}> {"<"} </Text>
            </TouchableOpacity>
            <Text style={styles.text}>{months[props.month]}</Text>
            <TouchableOpacity style={styles.addView} onPress={props.onSelectedMonth.bind(this, 1)}>
                <Text style={styles.plus}> {">"} </Text>
            </TouchableOpacity>
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
        color: '#DF9B6D',
    },
    addView: {
        height: 25,
        width: 25,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#DF9B6D',
        justifyContent: 'center', 
        alignItems: 'center' ,
    },
    plus: {
        marginBottom: 4,
        color: "#DF9B6D",
        fontSize: 22,
    },
})

export default MonthSelector;