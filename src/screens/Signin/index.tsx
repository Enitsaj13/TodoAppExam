// SignInScreen.tsx
import React, { useState } from 'react';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Pressable, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';
import AppButton from '@/components/Button';
import InputText from '@/components/InputText';
import { COLORS, SPACING } from '@/themes/theme';
import styles from './styles';

type RootStackParamList = {
    SignUpScreen: undefined
    TabNavigator: undefined; // or any other parameters if needed
    // other screen names and their parameters...
};

type SignInScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'SignUpScreen',
    'TabNavigator' // Specify the screen name you want to navigate to
>;

interface SignInScreenProps {
    navigation: SignInScreenNavigationProp;
}

const SignInScreen: React.FC<SignInScreenProps> = ({ navigation }) => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false); // State to track loading status

    const handleSignIn = async () => {
        // Validate email and password
        if (email.trim() === '' || password.trim() === '') {
            alert('Please enter both email and password.');
            return;
        }

        // Authenticate the user 
        const storedEmail = await AsyncStorage.getItem('email');
        const storedPassword = await AsyncStorage.getItem('password');

        setLoading(true); // Start loading

        if (email === storedEmail && password === storedPassword) {
            // If the email and password match the stored values, proceed to sign in
            try {
                setEmail('')
                setPassword('')
                // Simulate successful login
                setTimeout(async () => {
                    await AsyncStorage.setItem('authToken', 'true');
                    setLoading(false); // Stop loading
                    navigation.navigate('TabNavigator'); // Navigate to TabNavigator upon successful login
                }, 3000); // Simulate loading for 3 seconds
            } catch (error) {
                console.error("Error occurred during sign-in:", error);
                setLoading(false); // Stop loading
                alert("Error occurred during sign-in. Please try again.");
            }
        } else {
            // If the email and password do not match, display an error message
            setLoading(false); // Stop loading
            alert('Incorrect email or password. Please try again.');
        }
    };


    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color={COLORS.primaryColor} />
            ) : (
                <>
                    <View style={styles.signHeader}>
                        <Text style={styles.signTitle}>Sign In</Text>
                        <Text style={styles.signSubTitle}>Let's help you meet up your tasks.</Text>
                    </View>
                    <InputText
                        value={email}
                        autoCapitalize='none'
                        onChangeText={setEmail}
                        placeholder="Enter Your Email"
                        placeholderTextColor={COLORS.primaryLightGray}
                    />
                    <InputText
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Enter Your Password"
                        placeholderTextColor={COLORS.primaryLightGray}
                        secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword state
                        right={
                            <Feather
                                name={showPassword ? "eye-off" : "eye"}
                                size={24}
                                style={{ marginRight: SPACING.space_12 }}
                                color={COLORS.primaryLightGray}
                                onPress={() => setShowPassword(!showPassword)} // Toggle showPassword state on icon press
                            />
                        }
                    />
                    <AppButton onPress={handleSignIn}
                        title='Sign In'
                        style={{ marginTop: '10%' }}
                    />
                    <View style={styles.signFooter}>
                        <Text style={styles.signFooterText}>Don't have an account?</Text>
                        <Pressable onPress={() => navigation.navigate('SignUpScreen')}>
                            <Text style={styles.signInBtn}>Sign Up</Text>
                        </Pressable>
                    </View>
                </>
            )}
        </View>
    );
};



export default SignInScreen;
