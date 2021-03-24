import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function NewListingButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons 
                    name="plus-circle"
                    color={colors.white}
                    size={30}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        height: 70,
        width: 70,
        borderRadius: 35,
        bottom: 10,
        borderColor: colors.white,
        borderWidth: 10
    }
})