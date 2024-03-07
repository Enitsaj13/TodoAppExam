
import React, { FC } from 'react';
import { StyleSheet, Text, Pressable, StyleProp, ImageStyle, TextStyle, NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE } from '@/themes/theme';

interface AppButtonProps {
    title: string;
    onPress?: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
    accessibilityLabel?: string;
    disabled?: boolean;

    /**
     * Used to locate this button in end-to-end tests.
     */
    testID?: string;
    style?: StyleProp<ImageStyle>;
    textStyle?: StyleProp<TextStyle>;
    width?: number | string;

    /**
     * For showing secondary button styles
     */
    secondary?: boolean;
    left?: React.ReactNode;
    right?: React.ReactNode;
    backgroundColor?: string;
}

const AppButton: FC<AppButtonProps> = ({
    title,
    onPress,
    accessibilityLabel,
    disabled,
    testID,
    style,
    textStyle,
    width = '100%',
    backgroundColor,
    secondary,
    left,
    right,
    ...props }) => {

    const buttonBackgroundColor = secondary ? COLORS.secondaryColor : COLORS.primaryColor
    const textColor = COLORS.primaryWhite

    return (
        <Pressable
            style={[styles.button, { backgroundColor: buttonBackgroundColor }, style]}
            onPress={onPress}
            disabled={disabled}
            accessibilityLabel={accessibilityLabel}
            testID={testID}
            {...props}>
            {left}
            <Text style={[styles.text, { color: textColor }, textStyle]}>
                {title}
            </Text>
            {right}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        height: 50,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: BORDERRADIUS.radius_10
    },
    text: {
        alignSelf: 'center',
        fontSize: FONTSIZE.size_16,
        fontFamily: FONTFAMILY.poppins_semibold,
        color: COLORS.primaryWhite
    }
});

export default AppButton;