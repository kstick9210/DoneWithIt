import React from 'react';
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Screen from './app/components/Screen'


const Tweets = () => (
  <Screen>
    <Text>Tweets</Text>
  </Screen>
)

const TweetDetails = () => (
  <Screen>
    <Text>Tweet Details</Text>
  </Screen>
)

export default function App() {
  const Stack = createStackNavigator(); // Stack is an object with properties that are React components
  const StackNavigator = () => (
    <Stack.Navigator initialRouteName="Tweets">
      <Stack.Screen name="TweetDetails" component={TweetDetails}/>
      <Stack.Screen name="Tweets" component={Tweets}/>
    </Stack.Navigator>
  )

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}