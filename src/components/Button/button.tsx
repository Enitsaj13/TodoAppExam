import React, { FC } from 'react';
import { StyleSheet, Text, Pressable, StyleProp, ImageStyle, TextStyle, NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import { BORDERRADIUS, COLORS, FONTSIZE } from '@/themes/theme';


interface AppButtonProps {
    title: string;
    onPress?: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
    textStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ImageStyle>;
    width?: number | string;
}

const AppButton: FC<AppButtonProps> = ({
    title,
    onPress,
    textStyle,
    style,
    width = '100%',
    ...props }) => {

    const textColor = COLORS.primaryBlack;

    return (
        <Pressable
            style={[styles.button, style]}
            onPress={onPress}
            {...props}>
            <Text style={[styles.text, { color: textColor }, textStyle]}>
                {title}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 60,
        borderRadius: BORDERRADIUS.radius_4,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    secondaryButton: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: COLORS.primaryDarkGray
    },
    text: {
        alignSelf: 'center',
        fontSize: FONTSIZE.size_16
    }
});

export default AppButton;