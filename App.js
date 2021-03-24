import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import ListingsScreen from './app/screens/ListingsScreen'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
import ListingEditScreen from './app/screens/ListingEditScreen'
import AccountScreen from './app/screens/AccountScreen'
import MessagesScreen from './app/screens/MessagesScreen'
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator'

const Stack = createStackNavigator();
const ListingsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Listings" 
      component={ListingsScreen}
    />
    <Stack.Screen 
      name="Details" 
      component={ListingDetailsScreen}
    />
  </Stack.Navigator>
)

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Account"
      component={AccountScreen}
    />
    <Stack.Screen 
      name="Messages"
      component={MessagesScreen}
    />
  </Stack.Navigator>
)

export default function App() {

  return (
    <NavigationContainer theme={navigationTheme} >
      <AppNavigator />
    </NavigationContainer>
  );
}