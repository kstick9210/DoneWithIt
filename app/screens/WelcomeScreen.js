import React from 'react';
import { View, ImageBackground, StyleSheet, Image, Text } from 'react-native';

export default function WelcomeScreen() {
    return (
        <ImageBackground 
            source={require('../assets/background.jpg')}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image 
                    source={require('../assets/logo-red.png')}
                    style={styles.logo}
                />
                <Text>Sell What You Don't Need</Text>
            </View>
            <View style={styles.loginButton}/>
            <View style={styles.registerButton}/>
        </ImageBackground>
    )
}
 const styles = StyleSheet.create({
     background: {
         flex: 1,
         justifyContent: "flex-end",
         alignItems: "center",
     },
     logoContainer: {
         position: "absolute",
         top: 70,
         alignItems: "center",
     },
     logo: {
         width: 100,
         height: 100,
     },
     loginButton: {
         width: "100%",
         height: 70,
         backgroundColor: "#fc5c65",
     },
     registerButton: {
         width: "100%",
         height: 70,
         backgroundColor: "#4ecdc4",
     },
 })