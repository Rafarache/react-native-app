import React, {Component} from 'react';
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Ionicons';

//  CONSTANTS
import COLORS from '../../themes/colors' 

// STYLED COMPONENTS
const Container = styled.View`

    width: 100%;
    display: flex;
    flex-direction: row;
`;

const Tick = styled.TouchableOpacity`

    height: 30px;
    width: 30px;
    border-radius: 15px;
    border-width: 2px;
    border-color: white;
    justify-content: center;
    align-items: center;
    margin-right:8px;
`;

const Tick_Text = styled.Text`

    color: white;
    font-size: 30px;
    margin-bottom: 15px;
    margin-left: 4px;
`;

const Name = styled.Text`

    color: white;
    max-width: 78%;
    margin-right: 8px;
    font-size: 18px;
    margin-top: 2px;
`;

const Name_Input = styled.TextInput`
    
    max-width: 78%;
    color: white;
    margin-right: 8px;
    font-size: 18px;
`;

const Plus = styled.TouchableOpacity`

`;

export default class ToDo_Item extends Component {

    constructor (props) {
        super(props);
        this.state = {
            name: props.name,
            status: props.status,
            isEditig: false
        };
    }

    componentDidUpdate() {
        console.log(this.state.name)
    }

    setIsEditing = (bool) => {
        this.setState({ isEditig: bool })
    }

    handleNameInput = (name) => {
        this.setState({ name: name })
    }

    handleSubmit = () => {
        this.setState({ name: name })
    }
    
    render () {

        return (
        <Container>
            <Tick>
                {/* If status is true print tick, else dont print */}
                {this.state.status? 
                    <Tick_Text>✓</Tick_Text>
                    : null 
                }
            </Tick>
            
            {/* If is editting the name of the toDo, make it a text-input */}
            {/* Else, just show the name of toDo */}
            {this.state.isEditig?
                <Name_Input 
                    autoFocus={true}
                    value={this.state.name}
                    onChangeText={this.handleNameInput}
                    onSubmitEditing={() => 
                                this.setIsEditing(false)}
                />
                : <Name 
                    children={this.state.name}
                    onLongPress={() => this.setIsEditing(true)}
                />
            }
            <Plus>
                <Icon name="ios-close-circle-outline" size={30} color={COLORS.WHITE}/>
            </Plus>
        </Container>
        )
    }
}