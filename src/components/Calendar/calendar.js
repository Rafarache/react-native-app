import React, { useContext } from 'react';
import styled from 'styled-components/native'
import { FlatList } from 'react-native';

//  COMPONETS
import DayCalendar from './dayCalendar'

//  CONTEXT
import {Context} from '../../context/context'

//  SCRIPTS
import {formatCalendar} from '../../script/formatCalendar'

//  STYLED COMPONENTS
const Container = styled.View`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Calendar = props => {

    //  Get context
    let value = useContext(Context)

    console.log(props)
    return(
        <Container>
            <FlatList
                keyExtractor={(item, index) => item.id.toString()}
                data={formatCalendar(value.getMonth,props.month.days)}
                numColumns={7}
                renderItem={({item}) =>
                    <DayCalendar
                        id={item.id}
                        toDo={item.toDo_Array}/>
            }
            />     
        </Container>
    )
}

export default Calendar;