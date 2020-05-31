import React, { useContext } from 'react';
import styled from 'styled-components/native'

//  CONSTANTS
import COLORS from '../../themes/colors'

//  CONTEXT
import {Context} from '../../context/context'

//  SCRIPTS
import { findDayColor } from '../../script/findDayColor';

//  STYLED COMPONENTS
const Container = styled.TouchableOpacity`

    width: 30px;
    height: 30px;
    margin: 5px;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color};
    border-radius: 10px;
    border-width: ${props => props.border}px;
    border-color: ${COLORS.BLACK};
`;

const Text = styled.Text`

    color: ${COLORS.BLACK};
`;

const Box = styled.View`

    width: 20px;
    height: 20px;
    margin:10px;
    justify-content: center;
    align-items: center;
`;

const DayCalendar = props => {

    //  Get context
    let value = useContext(Context)

    //  Get background colors
    let color = findDayColor(props.toDo)

    //  Check if is the current day, if it is
    //  put a border around it
    var today = new Date();
    let border = 0
    if (today.getMonth() === value.getMonth && props.id === today.getDate() -1 ){
        border=2;
    }

    if( props.id !==false ){
        return(
            <Container
                color={color}
                border={border}
                onPress={value.handleAddToDo.bind(this, {name: '', id:value.getCounter, status:false, day:props.id, month:value.getMonth})}
            >
                <Text>{props.id + 1}</Text>                
            </Container>
        )              
    }
    else{
        return(
            <Box/>
        )      
    }
    
}

export default DayCalendar;