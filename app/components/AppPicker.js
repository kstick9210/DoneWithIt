import React, { useState } from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/styles'
import AppTextInput from './AppTextInput'
import Screen from './Screen'

export default function AppPicker({ icon, placeholder, ...otherProps }) {
    const [ modalVisible, setModalVisible ] = useState(false)

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && 
                        <MaterialCommunityIcons 
                            name={icon} 
                            size={20} 
                            color={defaultStyles.colors.medium} 
                            style={styles.icon} 
                        />
                    }
                    <MaterialCommunityIcons 
                        name="chevron-down" 
                        size={20} 
                        color={defaultStyles.colors.medium} 
                    />
                    <AppTextInput style={styles.text}>{placeholder}</AppTextInput>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button title="Close" onPress={() => setModalVisible(false)}/>
                </Screen>
            </Modal>
        </>
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