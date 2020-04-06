import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './componets/GoalItem';
import GoalInput from './componets/GoalInput';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle}]);
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) =>goal.id !== goalId);
    });
  }

  return (
    <View style={styles.srceen}>
      <Button title={'Add new'} onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler}/>
      <FlatList
      keyExtractor={(item, index) => item.id}
      data={courseGoals}
      renderItem={itemData => 
        <GoalItem id={itemData.item.id} title={itemData.item.value} onDelete={removeGoalHandler}/>
      }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  srceen: {
    padding: 30
  },
});
