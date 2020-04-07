import React from 'react';
import { StyleSheet , View, Text } from 'react-native';

const GoalListDay = props => {

    if (((props.id % 6) === 0) && (props.id!== 0)){
        return (
        <View>
            <View style={styles.day} >
                <Text style={styles.dayMounth}>{props.id.toString()}</Text>
                <Text style={styles.textWeek}>{props.name}</Text>
            </View>
            <View style={styles.bar}></View>   
        </View>      
        )
    }
    return(
        <View>
            <View style={styles.day} >
                <Text style={styles.dayMounth}>{props.id.toString()}</Text>
                <Text style={styles.textWeek}>{props.name}</Text>
            </View>
        </View> 
    )
}

const styles = StyleSheet.create({
    day: {
        backgroundColor: '#DF9B6D',
        padding: 8,
        borderRadius: 13,
        margin: 8,
        flexDirection:"row",
    },
    dayMounth: {
        color: "#ffffff",
        fontSize:25,
        marginRight:6,
    },
    textWeek: {
        marginTop:11,
        color: "#ffffff",
        opacity: 0.8,
    },
    text: {
        color: "#ffffff",
    },
    bar: {
        height: 5,
        marginVertical: 4,
        marginHorizontal: 60,
        flex: 1,
        backgroundColor: '#000000',
        borderRadius: 6
    }
})

export default GoalListDay;