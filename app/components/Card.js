import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';

export default function Card({title, subTitle, image}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image}/>
            <View style={styles.detailContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden',
    },
    detailContainer: {
        padding: 20,
    },
    title: {
        marginBottom: 7,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 200,
    }
})