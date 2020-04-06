import React, { useState} from 'react';
import { View, TextInput, StyleSheet, Button, Modal} from 'react-native';


const GoalItem = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
    }
    
    return (
        <Modal visible={props.visible} animationType='styles'>
            <View style={styles.internContainer}>
                <TextInput 
                    placeholder='Tarefa'
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <Button title='ADD' onPress={props.onAddGoal.bind(this, enteredGoal)}/>
            </View>   
        </Modal>
    )
}

const styles = StyleSheet.create({
    internContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
      },
      input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width:'80%',
        marginBottom: 10
      },
})

export default GoalItem;