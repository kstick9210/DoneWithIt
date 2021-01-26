import React from 'react'
import { View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/styles'
import AppTextInput from './AppTextInput'

export default function AppPicker({ icon, placeholder, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && 
                <MaterialCommunityIcons 
                    name={icon} 
                    size={20} 
                    color={defaultStyles.colors.medium} 
                    style={styles.icon} 
                />
            }
            <AppTextInput style={styles.text}>{placeholder}</AppTextInput>
            <MaterialCommunityIcons 
                name="chevron-down" 
                size={20} 
                color={defaultStyles.colors.medium} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    text: {
        flex: 1
    }
})