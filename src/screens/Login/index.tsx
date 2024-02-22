// LoginScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppButton from '@/components/Button/button';
import { BORDERRADIUS, COLORS } from '@/themes/theme';


const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSignUp = async () => {
        try {
            // Here you would typically implement validation and error handling
            await AsyncStorage.setItem(email, password);
            navigation.navigate('TabNavigator', { email }); // Pass email as a parameter
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    const handleSignIn = async () => {
        try {
            const userPassword = await AsyncStorage.getItem(email);
            if (userPassword === password) {
                navigation.navigate('TabNavigator', { email }); // Pass email as a parameter
            } else {
                // Handle invalid login credentials
                console.error('Invalid credentials');
            }
        } catch (error) {
            console.error('Error signing in:', error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                style={styles.input}
            />
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry
                style={styles.input}
            />
            <AppButton onPress={handleSignUp}
                title='Sign Up' textStyle={{ color: COLORS.primaryBlue }}
            />
            <AppButton onPress={handleSignIn}
                title='Sign In' textStyle={{ color: COLORS.primaryRed }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: COLORS.primaryLightGray,
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: BORDERRADIUS.radius_4
    },
});

export default LoginScreen;
