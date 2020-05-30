import React from 'react';
import { FlatList, ScrollView } from 'react-native';

//  COMPONENTS
import ToDo_Day from './toDo_Day'

const ToDo_Month = props => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={props.month.days}
            renderItem={({item}) =>
                <ToDo_Day 
                name={item.name}
                id={item.id}
                toDo={item.toDo_Array}
                />
            }
            /> 
        </ScrollView>
    )
}

export default ToDo_Month