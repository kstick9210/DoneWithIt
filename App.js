import React, {useState} from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { View, TextInput, Text } from 'react-native';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen'
import Icon from './app/components/Icon'
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

const categories = [
  {
    label: "Furniture",
    value: 1
  },
  {
    label: "Clothing",
    value: 2
  },
  {
    label: "Cameras",
    value: 3
  }
]

export default function App() {
  const [category, setCategory] = useState(categories[0])

  return (
    <Screen>
      <AppPicker 
        icon="apps" 
        placeholder="Category" 
        items={categories}
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
      />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}