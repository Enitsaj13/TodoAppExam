import React, { FC, useState } from 'react';
import {
    View,
    TextInput,
    StyleProp,
    ViewStyle,
    TextInputProps,
} from 'react-native';
import { COLORS } from '@/themes/theme';
import styles from './styles';

interface InputTextProps extends TextInputProps {
    style?: StyleProp<ViewStyle> | undefined;
    styleInputTextContainer?: StyleProp<ViewStyle> | undefined;
    right?: React.ReactNode;
    onFocus?: () => void; // Specify the type for onFocus
    onBlur?: () => void; // Specify the type for onBlur
}

const InputText: FC<InputTextProps> = ({
    styleInputTextContainer,
    style,
    right,
    onFocus,
    onBlur,
    ...props }) => {

    const [isFocused, setIsFocused] = useState<boolean>(false);

    return (
        <View style={[styles.inputTextContainer, styleInputTextContainer, { borderColor: isFocused ? COLORS.primaryColor : COLORS.primarySecondaryWhite }]}>
            <TextInput
                style={[styles.inputTextStyle, style]}
                onChangeText={props.onChangeText}
                maxFontSizeMultiplier={5}
                maxLength={props.maxLength}
                value={props.value}
                editable={props.editable}
                placeholder={props.placeholder}
                placeholderTextColor={props.placeholderTextColor}
                secureTextEntry={props.secureTextEntry}
                onFocus={() => {
                    setIsFocused(true);
                    if (onFocus) onFocus(); // Call onFocus if it's provided
                }}
                onBlur={() => {
                    setIsFocused(false);
                    if (onBlur) onBlur(); // Call onBlur if it's provided
                }}
                keyboardType={props.keyboardType}
                returnKeyType={props.returnKeyType}
                returnKeyLabel={props.returnKeyLabel}
                pointerEvents={props.pointerEvents}
                onPressIn={props.onPressIn}
                autoCapitalize={props.autoCapitalize}
            />
            {right}
        </View>
    );
};

export default InputText;
