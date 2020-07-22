import React from 'react';
import styled from 'styled-components/native'
import { FlatList, ScrollView } from 'react-native';

//  COMPONENTS
import ToDo_Day from './toDo_Day'

// STYLED COMPONENTS
const Container = styled.View`
    flex:1;
`;

const ToDo_Month = props => {
    return (
        <Container>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                {/* List of Days's */}
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
        </Container>
    )
}

export default ToDo_Month