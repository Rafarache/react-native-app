import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native'

//  CONSTANTS
import COLORS from '../../themes/colors' 

//  COMPONETS
import ToDo_Item from './toDo_Item'
import Separator from './separator'

// STYLED COMPONENTS
const Container = styled.View`

    background-color: ${COLORS.GREEN_1};
    padding: 13px;
    border-radius: 13px;
    margin-bottom: 8px;
    display: flex;
    flex-direction: row;
`;

const ToDo_List = props => {
    return (
        <Container>
            {/* List of ToDo's */}
            <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={props.toDo_Array}
            ItemSeparatorComponent={Separator}
            renderItem={({item}) =>
                <ToDo_Item
                    name={item.name}
                    status={item.status}
                    id={item.id}
                />
            }
            />            
        </Container>
    )
}

export default ToDo_List;