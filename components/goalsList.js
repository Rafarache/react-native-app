import React from 'react';
import { StyleSheet , View, FlatList } from 'react-native';

import GoalListDay from './goalListDay'

const GoalList = props => {

    return (
        <FlatList
        data={props.calendarData.days}
        renderItem={({item}) =>
            <GoalListDay name={item.day} id={item.id} />
        }
        />
    )
}

const styles = StyleSheet.create({
    list: {

    },
})

export default GoalList;