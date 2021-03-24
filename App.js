import React from 'react';
import { Text, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Screen from './app/components/Screen'

const Link = () => {
  const navigation = useNavigation(); //how to access navigation from a component (not avil from props in comp)

  return (
    <Button 
      title="Click"
      onPress={() => navigation.navigate("TweetDetails")}
    />
  )
}

const Tweets = ({ navigation }) => ( //navigation prop only avail on Screen comps (ones we declare as Stack.Screen in the Stack Navigator)
  <Screen>
    <Text>Tweets</Text>
    <Button 
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails", {id: 1 })} //navigate method ensures there is only one instance of this route on the navigation stack
    />
    {/* <Link /> */}
  </Screen>
)

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
)

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
)

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: 'tomato',
      activeTintColor: 'white',
      inactiveBackgroundColor: 'lightgrey',
      inactiveTintColor: 'black'
    }}
  >
    <Tab.Screen 
      name="Feed" 
      component={Tweets} 
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color}/> //size prop is suggested size from react navigator, color comes from tabBarOptions object
        )}}
    />
    <Tab.Screen 
      name="Account" 
      component={Account} 
    />
  </Tab.Navigator>
)

export default function App() {
  const Stack = createStackNavigator(); // Stack is an object with properties that are React components
  const StackNavigator = () => (
    <Stack.Navigator 
      initialRouteName="Tweets"
      screenOptions={{
        headerStyle: { backgroundColor: 'dodgerblue' },
          headerTintColor: 'whitesmoke',
      }}
    >
      <Stack.Screen 
        name="TweetDetails" 
        component={TweetDetails}
        options={({ route }) => ({ title: route.params.id })} //dynamically set title of page
      />
      <Stack.Screen 
        name="Tweets" 
        component={Tweets}
        options={{
          headerStyle: { backgroundColor: 'tomato' },
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  )

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}