import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import Screen from '../components/Screen'
import ListItem from '../components/lists/ListItem'
import Icon from '../components/Icon'
import ListItemSeparator from '../components/lists/ListItemSeparator'
import colors from '../config/colors'

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    }
]

export default function AccountScreen() {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                    title="Mosh"
                    subTitle="mosh email"
                    image={require('../assets/mosh.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item}) =>
                        <ListItem 
                            title={item.title}
                            IconComponent={
                                <Icon 
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                        />
                    }
                />
            </View>
            <ListItem 
                title="Log Out"
                IconComponent= {
                    <Icon 
                        name="logout" 
                        backgroundColor="#FFE66D"
                    />
                }
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.light
    }
})