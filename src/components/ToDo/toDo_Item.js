import React, {Component, useContext} from 'react';
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Ionicons';

//  CONSTANTS
import COLORS from '../../themes/colors' 

//  CONTEXT
import {Context} from '../../context/context'

// STYLED COMPONENTS
const Container = styled.View`

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
            id: props.id,
            isEditig: false,

            f_remove: null,
            f_rename: null,
            f_changeStatus: null
        };
    }

    
    static contextType = Context;
    componentWillMount(){
        //  Get handle functions from context
        const value = this.context;
        this.setState({f_remove : value.handleRemoveToDo})
        this.setState({f_rename: value.handleRenameToDo})
        this.setState({f_changeStatus: value.handleChangeStatusToDo})

        if(this.state.name === '') {
            this.setState({isEditig: true})
        }
      }

    setIsEditing = (bool) => {
        this.setState({ isEditig: bool })
    }

    //  If the name is being modified, update in ToDo_item and in screen
    handleNameInput = (name) => {
        this.setState({ name: name })
        this.state.f_rename(name,this.state.id)
    }

    //  Save name if enter id pressed
    handleSubmit = () => {
        this.setState({ name: name })
    }

    handleTick = () => {
        this.setState({ status: !this.state.status })
        this.state.f_changeStatus(this.state.id)
    }
    
    render () {
        
        return (
        <Container>
            <Tick
                onPress={this.handleTick}
            >
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
                    onSubmitEditing={() => this.setIsEditing(false)}
                />
                : <Name 
                    children={this.state.name}
                    onLongPress={() => this.setIsEditing(true)}
                />
            }

            {/* Delete toDo button */}
            <Plus
                onPress={this.state.f_remove.bind(this, this.state.id)}
            >
                <Icon name="ios-close-circle-outline" size={30} color={COLORS.WHITE}/>
            </Plus>
            
        </Container>
        )
    }
}