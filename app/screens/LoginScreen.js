import React, { useState } from 'react'
import { StyleSheet, Image } from 'react-native'
import Screen from '../components/Screen'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'

export default function LoginScreen() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <Screen style={styles.container}>
            <Image 
                source={require('../assets/logo-red.png')} 
                style={styles.logo}
            />
            <AppTextInput 
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                keyboardType="email-address"
                placeholder="Email"
                textContentType="emailAddress" //iOS only - lets iOS autofill from keychain
                onChangeText={text => setEmail(text)}
            />
            <AppTextInput 
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
                onChangeText={text => setPassword(text)}
            />
            <AppButton title="Login" onPress={() => console.log(email, password)}/>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
})