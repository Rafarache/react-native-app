import React, {Component} from 'react';
import { View, FlatList, StyleSheet} from 'react-native';

import Goal from "./goal";
import Separator from "./separator";

const DayGoals = props => {
    if (props.tarefas.length !== 0) {
        return (
            <View style={styles.goals}>
                <FlatList
                keyExtractor={(item, index) => item.id.toString()}
                data={props.tarefas}
                ItemSeparatorComponent={Separator}
                renderItem={({item}) =>
                    <Goal tarefa={item.tarefaName} id={item.id} removeGoal={props.onRemoveGoal} day={props.day} modify={props.modifyTarefa} status={item.isActive} />
                }
                />            
            </View>
        )        
    }
    return (
        <View></View>
    )

}

const styles = StyleSheet.create({
    goals: {
        backgroundColor: '#00a200',
        padding: 13,
        borderRadius: 13,
        marginBottom: 8,
        flexDirection:"row",
    },
})

export default DayGoals;