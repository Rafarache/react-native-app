import React from 'react';
import { StyleSheet , View, FlatList } from 'react-native';

import GoalListDay from './goalListDay'

const GoalList = props => {
    return (
        <FlatList
        keyExtractor={(item, index) => item.id.toString()}
        data={props.calendarData.days}
        renderItem={({item}) =>
            <GoalListDay name={item.day} id={item.id} tarefas={item.tarefas} newTarefa={props.newTarefa} removeGoal={props.onRemoveGoal} modifyGoal={props.modifyTarefa}/>
        }
        />
    )
}

const styles = StyleSheet.create({
    list: {

    },
})

export default GoalList;