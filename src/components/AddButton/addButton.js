import React, {useContext} from 'react';
import styled from 'styled-components/native'

//  CONSTANTS
import COLORS from '../../themes/colors' 

//  CONTEXT
import {Context} from '../../context/context'

//  STYLED COMPONENTS
const Container = styled.View`

    display: flex;
    flex:1;
    flex-direction: column-reverse;
    align-items: center;
`;

const Button = styled.TouchableOpacity`

    background-color: ${COLORS.GREEN_1};
    padding: 8px;
    margin-bottom: 10px;
    border-radius: 13px;
    width: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Text = styled.Text`

    color: ${COLORS.WHITE};
`;

const AddButton = props => {

    //  Get context
    let value = useContext(Context)

    return (
    <Container>
        <Button 
        onPress={value.handleAddToDo.bind(this, {name: '', id:value.getCounter, status:false, day:props.id, month:value.getMonth})}
        >
            <Text>Add</Text>
        </Button>
    </Container>     
    )
}

export default AddButton