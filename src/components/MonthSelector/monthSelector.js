import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'

//  CONSTANTS
import COLORS from '../../themes/colors' 

// STYLED COMPONENTS
const Container = styled.View`

    padding: 8px;
    border-radius: 13px;
    flex-direction: row;
    margin-bottom: 4px;
    justify-content: center;
    align-items: center;
    margin-left: 40px;
    margin-right: 40px;
`;

const Button = styled.TouchableOpacity`

    height: 25px;
    width: 25px;
    border-radius: 10px;
    border-width: 2px;
    border-color: ${COLORS.ORANGE_1};
    justify-content: center;
    align-items: center ;
`;

const Button_Text = styled.Text`

    margin-bottom: 4px;
    color: ${COLORS.ORANGE_1};
    font-size: 22px;
`;

const Month = styled.Text`

    flex:1px;
    text-align: center;
    font-size: 20px;
    color: ${COLORS.ORANGE_1};
`;

const MonthSelector = props => {

    const months = ["January", "February", "March", "April", 
                  "May", "June", "July", "August", "September", "October", 
                  "November", "December"];

    return(
        <Container>
            <Button>
                <Button_Text onPress={props.handleChangeMonth.bind(this, -1)}>{"<"}</Button_Text>
            </Button>
            <Month>{months[props.month]}</Month>
            <Button>
                <Button_Text onPress={props.handleChangeMonth.bind(this, 1)}>{">"}</Button_Text>
            </Button>
        </Container>  
    )
}

export default MonthSelector;