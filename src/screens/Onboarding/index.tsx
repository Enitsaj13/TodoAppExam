import React from 'react'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image } from 'react-native'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '@/themes/theme'
import AppButton from '@/components/Button'


type RootStackParamList = {
    SignUpScreen: undefined; // or any other parameters if needed
    // other screen names and their parameters...
};

type OnboardingScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'SignUpScreen' // Specify the screen name you want to navigate to
>;

interface OnboardingScreenProps {
    navigation: OnboardingScreenNavigationProp;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('@/assets/images/background.png')}
                resizeMode='contain'
                style={styles.image}
            />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>TaskTrek: Navigate, Organize, Achieve!</Text>
                <Text style={styles.subTitle}>
                    Navigate Your Busy Schedule with Ease: A Comprehensive Task Management
                    Companion Designed to Simplify Your Life, Boost Your Productivity,
                    and Bring Your Goals Within Reach.
                </Text>
            </View>
            <AppButton title='Get Started'
                onPress={() => navigation.navigate('SignUpScreen')}
                style={{ marginTop: SPACING.space_40 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primaryWhite
    },
    image: {
        width: 260,
        height: 260
    },
    titleContainer: {
        marginVertical: SPACING.space_40,
        marginHorizontal: SPACING.space_24
    },
    title: {
        textAlign: 'center',
        fontFamily: FONTFAMILY.poppins_bold,
        fontSize: FONTSIZE.size_16,
        color: COLORS.primaryBlack,
        marginBottom: SPACING.space_18
    },
    subTitle: {
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_14,
        textAlign: 'justify'
    }
})

export default OnboardingScreen
