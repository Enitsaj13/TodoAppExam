import React, { useState } from 'react';
import { Text, View, SafeAreaView, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { Directions, FlingGestureHandler } from 'react-native-gesture-handler';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './styles';

type RootStackParamList = {
    TabNavigator: undefined; // or any other parameters if needed
    // other screen names and their parameters...
};

type OnboardingScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'TabNavigator' // Specify the screen name you want to navigate to
>;

interface OnboardingScreenProps {
    navigation: OnboardingScreenNavigationProp;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ navigation }) => {
    const [screenIndex, setScreenIndex] = useState(0);
    const translationX = useSharedValue(0);

    const onboardingSteps = [
        {
            icon: 'snowflake',
            title: 'Welcome #TodoApp',
            description: 'A simple React Native Application for you.',
        },
        {
            icon: 'people-arrows',
            title: 'Stay organized and productive',
            description: 'Manage your tasks effectively and accomplish your goals with our intuitive todo app',
        },
        {
            icon: 'book-reader',
            title: 'Support Educational Initiatives',
            description:
                'Contribute to our mission to provide educational opportunities for children. Help us ensure every task completed contributes to this noble cause.',

        },
    ];

    const data = onboardingSteps[screenIndex];

    const onContinue = () => {
        const isLastScreen = screenIndex === onboardingSteps.length - 1;
        if (isLastScreen) {
            endOnboarding();
            navigation.navigate('TabNavigator'); // Navigate to task screen
        } else {
            setScreenIndex(screenIndex + 1);
        }
    };

    const onBack = () => {
        const isFirstScreen = screenIndex === 0;
        if (isFirstScreen) {
            endOnboarding();
        } else {
            setScreenIndex(screenIndex - 1);
        }
    };

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translationX.value }],
        };
    });

    const endOnboarding = () => {
        navigation.navigate('TabNavigator');
        setScreenIndex(0);
    };

    return (
        <SafeAreaView style={styles.page}>
            <StatusBar style="light" />

            <View style={styles.stepIndicatorContainer}>
                {onboardingSteps.map((step, index) => (
                    <View
                        key={index}
                        style={[
                            styles.stepIndicator,
                            { backgroundColor: index === screenIndex ? '#0b80d4' : 'grey' },
                        ]}
                    />
                ))}
            </View>

            <FlingGestureHandler
                direction={Directions.LEFT}
                onHandlerStateChange={({ nativeEvent }) => {
                    if (nativeEvent.state === 5) {
                        onContinue();
                    }
                }}
            >
                <FlingGestureHandler
                    direction={Directions.RIGHT}
                    onHandlerStateChange={({ nativeEvent }) => {
                        if (nativeEvent.state === 5) {
                            onBack();
                        }
                    }}
                >
                    <Animated.View style={[styles.pageContent, animatedStyle]}>
                        <FontAwesome5
                            style={styles.image}
                            name={data.icon}
                            size={150}
                            color="#0b80d4"
                        />
                        <View style={styles.footer}>
                            <Text style={styles.title}>{data.title}</Text>
                            <Text style={styles.description}>{data.description}</Text>
                            <View style={styles.buttonsRow}>
                                <Text onPress={endOnboarding} style={styles.buttonText}>
                                    Skip
                                </Text>

                                <Pressable onPress={onContinue} style={styles.button}>
                                    <Text style={styles.buttonText}>Continue</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Animated.View>
                </FlingGestureHandler>
            </FlingGestureHandler>
        </SafeAreaView>
    );
}

export default OnboardingScreen;
