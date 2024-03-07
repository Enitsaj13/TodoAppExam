import React from 'react';
import { StyleSheet, TouchableOpacity, StyleProp, ViewStyle, View, NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BORDERRADIUS, COLORS } from '@/themes/theme';

interface AddTodoProps {
    onPress?: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
    style?: StyleProp<ViewStyle>;
    checkIcon?: boolean;
    addIcon?: boolean;
}

const AddTodo: React.FC<AddTodoProps> = ({ onPress, style, checkIcon, addIcon }) => {
    return (
        <View style={[styles.containerBtnTodo, style]}>
            <TouchableOpacity onPress={onPress} style={styles.btnAddTodo}>
                {addIcon && <Ionicons name="add-sharp" size={24} color={COLORS.primaryWhite} />}
                {checkIcon && <Ionicons name="checkmark-sharp" size={22} color={COLORS.primaryWhite} />}
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    containerBtnTodo: {
        backgroundColor: COLORS.primaryColor,
        borderRadius: BORDERRADIUS.radius_25,
        position: 'absolute',
        bottom: 100,
        right: 20,
    },
    btnAddTodo: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default AddTodo