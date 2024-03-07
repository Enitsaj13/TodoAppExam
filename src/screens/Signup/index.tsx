// SignUpScreen.tsx
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
    SignInScreen: undefined; // or any other parameters if needed
    // other screen names and their parameters...
};

type OnboardingScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'SignInScreen' // Specify the screen name you want to navigate to
>;

interface OnboardingScreenProps {
    navigation: OnboardingScreenNavigationProp;
}

const SignUpScreen: React.FC<OnboardingScreenProps> = ({ navigation }) => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false); // State to track loading status

    const handleSignUp = async () => {
        // Check if name, email, and password are empty
        if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
            alert("Please fill in all fields");
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Invalid email format");
            return;
        }

        setLoading(true); // Start loading

        // Save user data to AsyncStorage
        try {
            await AsyncStorage.setItem('name', name);
            await AsyncStorage.setItem('email', email);
            await AsyncStorage.setItem('password', password);

            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');

            // Simulate loading for 3 seconds
            setTimeout(() => {
                setLoading(false); // Stop loading
                alert("Registration successful!");
                navigation.navigate('SignInScreen');
            }, 3000);
        } catch (error) {
            console.error("Error saving user data:", error);
            setLoading(false); // Stop loading
            alert("Error occurred during registration. Please try again.");
        }
    };


    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color={COLORS.primaryColor} />
            ) : (
                <>
                    <View style={styles.signHeader}>
                        <Text style={styles.signTitle}>Welcome on board!</Text>
                        <Text style={styles.signSubTitle}>Let's help you meet up your tasks.</Text>
                    </View>
                    <InputText
                        value={name}
                        onChangeText={setName}
                        placeholder="Enter Your Full Name"
                        placeholderTextColor={COLORS.primaryLightGray}
                    />
                    <InputText
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize='none'
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
                    <InputText
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        placeholder="Confirm Your Password"
                        placeholderTextColor={COLORS.primaryLightGray}
                        secureTextEntry={!showConfirmPassword} // Toggle secureTextEntry based on showPassword state
                        right={
                            <Feather
                                name={showConfirmPassword ? "eye-off" : "eye"}
                                size={24}
                                style={{ marginRight: SPACING.space_12 }}
                                color={COLORS.primaryLightGray}
                                onPress={() => setShowConfirmPassword(!showConfirmPassword)} // Toggle showPassword state on icon press
                            />
                        }
                    />
                    <AppButton onPress={handleSignUp}
                        title='Sign Up'
                        style={{ marginTop: '10%' }}
                    />
                    <View style={styles.signFooter}>
                        <Text style={styles.signFooterText}>Already have an account?</Text>
                        <Pressable onPress={() => navigation.navigate('SignInScreen')}>
                            <Text style={styles.signInBtn}>Sign In</Text>
                        </Pressable>
                    </View>
                </>
            )}
        </View>
    );
};


export default SignUpScreen;
