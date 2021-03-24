import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ListingsScreen from '../screens/ListingsScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen
            name="Listings" component={ListingsScreen} 
            name="ListingEdit" component={ListingEditScreen} 
            name="Account" component={AccountScreen} 
        />
    </Tab.Navigator>
)

export default AppNavigator;