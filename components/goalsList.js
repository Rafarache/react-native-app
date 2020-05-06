import React from 'react';
import { StyleSheet , View, FlatList, ScrollView } from 'react-native';

import GoalListDay from './goalListDay'

const GoalList = props => {
    return (
            <ScrollView>
                <FlatList
                keyExtractor={(item) => item.id.toString()}
                data={props.calendarData.days}
                renderItem={({item}) =>
                    <GoalListDay name={item.day}
                    id={item.id}
                    tarefas={item.tarefas}
                    newTarefa={props.newTarefa}
                    removeGoal={props.onRemoveGoal}
                    modifyGoal={props.modifyTarefa}
                    modifyNameTarefa={props.modifyNameTarefa} />
                }
                /> 
            </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    list: {
    },
})

export default GoalList;