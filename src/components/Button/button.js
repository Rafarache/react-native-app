import React, { useContext } from 'react';
import styled from 'styled-components/native'
import Ionicons from 'react-native-vector-icons/Ionicons';

//  CONSTANTS
import COLORS from '../../themes/colors'

//  STYLED COMPONENTS
const Container = styled.TouchableOpacity`

    padding: 12px;
    border-radius: 13px;
    background-color: ${COLORS.GREEN_1};
    flex-direction: row;
`;

const TextView = styled.View`

    padding-left: 12px;
`

const Title = styled.Text`
    
    color: ${COLORS.WHITE};
    font-size: 18px;
`

const Description = styled.Text`
    
    color: ${COLORS.WHITE};
    font-size: 13px;
    margin-top: 8px;
    opacity: 0.8;
`

const Button = props => {
    return(
        <Container onPress={props.onPress}>
            <Ionicons name={props.icon} size={40} color={COLORS.WHITE} />
            <TextView>
                <Title>{props.title}</Title>
                <Description>{props.description}</Description>
            </TextView>
        </Container>
    )
}

export default Button;