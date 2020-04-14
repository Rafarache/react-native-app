import React, { useState} from 'react';
import { View , StyleSheet, TouchableOpacity, TextInput, Modal, Picker, Text} from 'react-native';

import AddGoalButton from './addGoalButton';

    function isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

const GoalInput = props => {

    const [enteredGoalName, setEnteredGoalName] = useState('');
    const [dayValue, setDayValue] = useState('1');
    const [monthValue, setMonthValue] = useState('1');

    const goalNameInputHandler = enteredGoalName => {
        setEnteredGoalName(enteredGoalName);
    }

    if (props.info.isActive === false){
        return(
        <Modal visible={props.visible} animationType='styles' >
            <View style={styles.modal}>
                    <View style={styles.internContainer}>
                        <TextInput style={styles.input} placeholder='Tarefa' onChangeText={goalNameInputHandler} value={enteredGoalName}/>
                        <View style={styles.pickersRow}>
                            <Picker
                                mode='dropdown'
                                selectedValue={dayValue}
                                style={styles.pickerMonth}
                                onValueChange={(itemValue, itemIndex) => setDayValue(itemValue)}
                            >
                                <Picker.Item label="1" value="1" /><Picker.Item label="2" value="2" /><Picker.Item label="3" value="3" />
                                <Picker.Item label="4" value="4" /><Picker.Item label="5" value="5" /><Picker.Item label="6" value="6" />
                                <Picker.Item label="7" value="7" /><Picker.Item label="8" value="8" /><Picker.Item label="9" value="9" /><Picker.Item label="10" value="10" />
                                <Picker.Item label="11" value="11" /><Picker.Item label="12" value="12" /><Picker.Item label="13" value="13" />
                                <Picker.Item label="14" value="14" /><Picker.Item label="15" value="15" /><Picker.Item label="16" value="16" />
                                <Picker.Item label="17" value="17" /><Picker.Item label="18" value="18" /><Picker.Item label="19" value="19" /><Picker.Item label="20" value="20" />
                                <Picker.Item label="21" value="21" /><Picker.Item label="22" value="22" /><Picker.Item label="22" value="22" />
                                <Picker.Item label="24" value="24" /><Picker.Item label="25" value="25" /><Picker.Item label="26" value="26" />
                                <Picker.Item label="27" value="27" /><Picker.Item label="28" value="28" /><Picker.Item label="29" value="29" /><Picker.Item label="30" value="30" />
                                <Picker.Item label="31" value="31" />
                            </Picker>
                            <Picker
                                mode='dropdown'
                                selectedValue={monthValue}
                                style={styles.pickerMonth}
                                onValueChange={(itemValue, itemIndex) => setMonthValue(itemValue)}
                            >
                                <Picker.Item label="January" value="1" /><Picker.Item label="February" value="2" /><Picker.Item label="March" value="3" />
                                <Picker.Item label="April" value="4" /><Picker.Item label="May" value="5" /><Picker.Item label="June" value="6" />
                                <Picker.Item label="July" value="7" /><Picker.Item label="August" value="8" /><Picker.Item label="September" value="9" /><Picker.Item label="October" value="10" />
                                <Picker.Item label="November" value="11" /><Picker.Item label="December" value="12" />
                            </Picker>                        
                        </View>
                        <TouchableOpacity activeOpacity= {1} style={styles.addView}
                        onPress={props.onAddGoal.bind(this, {name:enteredGoalName , day:dayValue, month:monthValue})}>
                            <Text style={styles.addViewText} >Add</Text>
                        </TouchableOpacity >
                    </View>
            </View>
                <AddGoalButton onAddGoal={props.ableAddGoal}/>
            </Modal> 
        )
    }
    else {
    return(
        <Modal visible={props.visible} animationType='styles' >
            <View style={styles.modal}>
                    <View style={styles.internContainer}>
                        <TextInput style={styles.input} placeholder='Tarefa' onChangeText={goalNameInputHandler} value={enteredGoalName}/>
                        <TouchableOpacity activeOpacity= {1} style={styles.addView} 
                        onPress={props.onAddGoal.bind(this, {name:enteredGoalName , day:props.info.day, month:props.info.month})}>
                            <Text style={styles.addViewText}>Add</Text>
                        </TouchableOpacity >
                    </View>
            </View>
                <AddGoalButton onAddGoal={props.ableAddGoal} />
        </Modal> 
    )       
    }
}

const styles = StyleSheet.create({
    pickerMonth: {
        color: '#ffffff',
        width: '50%',
        height: 30,
        flex: 1,
    },
    pickerDay: {
        color: '#ffffff',
        width: '50%',
        height: 30,
        flex: 1, 
    },
    pickersRow: {
        flexDirection: "row",
        marginHorizontal: '10%',
        justifyContent: "center",
        marginBottom:20,
    },
    internContainer: {
        height: 230,
        width: '90%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#00a200',
        borderRadius: 50,
      },
      input: {
        backgroundColor: '#186E1B',
        padding: 15,
        paddingHorizontal: 20,
        color: '#ffffff',
        fontSize: 20,
        width:'90%',
        marginBottom: 20,
        marginHorizontal: 20,
        borderRadius:30,
      },
      modal: {
        height:'100%',
        width: '100%',
        justifyContent:'center',
        alignItems:'center',  
      },
      addView: {
        backgroundColor: '#00a200',
        padding: 8,
        color: '#ffffff',
        fontSize: 20,
        width:'50%',
        marginHorizontal: 20,
        borderRadius:30,
        borderColor: "#ffffff",
        borderWidth: 3,
      },
      addViewText: {
        textAlign: "center",
        fontSize: 20,
        color: "#ffffff"
      },
})

export default GoalInput;