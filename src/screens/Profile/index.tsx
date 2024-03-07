import React, { useEffect, useState } from 'react';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { COLORS, SPACING, } from '@/themes/theme';
import InputText from '@/components/InputText';
import AppButton from '@/components/Button';
import styles from './stytles';

type RootStackParamList = {
    SignInScreen: undefined; // or any other parameters if needed
    // other screen names and their parameters...
};

type MyProfileNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'SignInScreen' // Specify the screen name you want to navigate to
>;

interface MyProfileProps {
    navigation: MyProfileNavigationProp;
}

const MyProfile: React.FC<MyProfileProps> = ({ navigation }) => {

    const [fullName, setFullName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const retrieveUserData = async () => {
            try {
                const storedFullName = await AsyncStorage.getItem('name');
                const storedEmail = await AsyncStorage.getItem('email');

                if (storedFullName && storedEmail) {
                    setFullName(storedFullName);
                    setEmail(storedEmail);
                }
            } catch (error) {
                console.error('Error retrieving user data:', error);
            }
        };

        retrieveUserData();
    }, []);

    const logout = async () => {
        try {
            setLoading(true); // Set loading to true when logout button is pressed
            // Simulate a delay for demonstration purposes
            await new Promise((resolve) => setTimeout(resolve, 3000));
            // Clear the authentication token or user data from AsyncStorage
            // await AsyncStorage.removeItem('authToken');
            // Navigate the user to the login screen
            navigation.navigate('SignInScreen');
        } catch (error) {
            console.error('Error logging out:', error);
            setLoading(false); // Set loading to false if an error occurs
        }
    };

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color={COLORS.primaryColor} />
            ) : (
                <>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity style={styles.profileImage}>
                            <Ionicons name="person-circle-outline" size={60} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.fullName}>My Account</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.labelContainer}>
                            <Text style={styles.labelText}>Your Full Name</Text>
                            <InputText readOnly value={fullName} />
                        </View>
                        <View style={styles.labelContainer}>
                            <Text style={styles.labelText}>Your Email</Text>
                            <InputText readOnly value={email} />
                        </View>
                        <View style={styles.labelContainer}>
                            <Text style={styles.labelText}>Your Password</Text>
                            <InputText readOnly value={"************"} />
                        </View>
                    </View>
                    <AppButton title="Log Out" secondary onPress={logout}
                        textStyle={{ marginHorizontal: SPACING.space_30 * 3 }}
                        left={<SimpleLineIcons name="logout" size={24} color={COLORS.primaryWhite} />}
                    />
                </>
            )}
        </View>
    );
};




export default MyProfile;
