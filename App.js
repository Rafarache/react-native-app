import React, {Component} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//  CONSTANTS
import COLORS from './src/themes/colors'

//  SCREENS
import HomeScreen from './src/screens/homeScreen';
import SettingsScreen from './src/screens/settingsScreen';

//  ASYNC STORAGE
import { AsyncStorage } from 'react-native';
import SaveData from './src/async-storage/_storeData'

const Tab = createBottomTabNavigator();

export default class App extends Component {

  componentWillMount() {
    this.checkData('@ToDo')
  }

  //  Check if there is previus data in phone
  checkData = async (key) => {
    try {
      const item = await AsyncStorage.getItem(key)
      if (item !== null) {
      //  Does nothing 
      }
    } catch (e) {
      //  If not, initialize data 
      console.error('Failed to load .')
      this.initData()
    }
  }

  //  Inicialize data
  initData() {
    SaveData._storeData([],'@DailyToDo')
    SaveData._storeData([],'@ToDo')
  }

  render () {
  return(
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: COLORS.GREEN_1,
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );}
}
