import React from 'react';
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Ionicons';

//  CONSTANTS
import COLORS from '../../themes/colors' 

//  COMPONETS
import ToDo_List from './toDo_List'

//  STYLED COMPONENTS
const Day = styled.View`

    background-color: ${COLORS.ORANGE_1};
    padding: 8px;
    border-radius: 13px;
    margin-bottom: 8px;
    display: flex;
    flex-direction: row;
`;

const Number = styled.Text`

    color: ${COLORS.WHITE};
    font-size:25px;
    margin-right:6px;
`;

const Week = styled.Text`

    flex: 1;
    margin-top:11;
    color: ${COLORS.WHITE};
    opacity: 0.8;
`;

const Plus = styled.TouchableOpacity`

`;

const ToDo_Day = props => {
    return (
    <>
        <Day>
            <Number>{(props.id + 1).toString()}</Number>
            <Week>{props.name}</Week>
            <Plus>
                <Icon name="ios-add-circle-outline" size={30} color={COLORS.WHITE}/>
            </Plus>
        </Day>
        {props.toDo.length !== 0 ?
            <ToDo_List toDo_Array={props.toDo}/>
            : null
        }
    </>      
    )
}

export default ToDo_Day