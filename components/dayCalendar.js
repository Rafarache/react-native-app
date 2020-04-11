import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

const DayCalendar = props => {
    if( props.id !==false ){
        return(
            <View style={styles.box}>
                <Text>{props.id + 1}</Text>
            </View>
        )              
    }
    else{
        return(
            <View style={styles.box}>
            </View>
        )      
    }
    
}

const styles = StyleSheet.create({
    box: {
        width: 20,
        height: 20,
        margin:10,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default DayCalendar;