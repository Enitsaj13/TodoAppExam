
import React, { FC } from 'react';
import {
    View,
    TextInput,
    StyleProp,
    ViewStyle,
    TextInputProps,
} from 'react-native';
import styles from './styles';


interface InputTextProps {
    style?: StyleProp<ViewStyle> | undefined;
    styleInputTextContainer?: StyleProp<ViewStyle> | undefined
}

const InputText: FC<InputTextProps & TextInputProps> = ({
    styleInputTextContainer,
    style,
    ...props }) => {
    return (
        <View style={[styles.inputTextContainer, styleInputTextContainer]}>
            <TextInput style={[styles.inputTextStyle, style]}
                onChangeText={props.onChangeText}
                maxFontSizeMultiplier={5}
                maxLength={props.maxLength}
                value={props.value}
                editable={props.editable}
                placeholder={props.placeholder}
                placeholderTextColor={props.placeholderTextColor}
                secureTextEntry={props.secureTextEntry}
                onBlur={props.onBlur}
                onFocus={props.onFocus}
                keyboardType={props.keyboardType}
                returnKeyType={props.returnKeyType}
                returnKeyLabel={props.returnKeyLabel}
                pointerEvents={props.pointerEvents}
                onPressIn={props.onPressIn}
                autoCapitalize={props.autoCapitalize}
            />
        </View>
    );
};

export default InputText;
