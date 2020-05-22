import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import COLORS from './src/themes/colors'

import Home_Screen from './src/screens/home_screen';
import Settings_Screen from './src/screens/settings_screen';


const Tab = createBottomTabNavigator();

export default function App() {

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
          <Tab.Screen name="Home" component={Home_Screen} />
          <Tab.Screen name="Settings" component={Settings_Screen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
