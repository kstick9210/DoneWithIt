import React from 'react';
import { Text, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

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

export default function App() {
  const Stack = createStackNavigator(); // Stack is an object with properties that are React components
  const StackNavigator = () => (
    <Stack.Navigator initialRouteName="Tweets">
      <Stack.Screen 
        name="TweetDetails" 
        component={TweetDetails}
        options={({ route }) => ({ title: route.params.id })} //dynamically set title of page
      />
      <Stack.Screen name="Tweets" component={Tweets}/>
    </Stack.Navigator>
  )

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}