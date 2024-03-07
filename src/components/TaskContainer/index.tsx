import React, { useState } from 'react';
import { NativeSyntheticEvent, NativeTouchEvent, TouchableOpacity, Text, View, Alert, StyleProp, ViewStyle } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { MaterialCommunityIcons as Badge } from '@expo/vector-icons';
import { Fontisto as Mark } from '@expo/vector-icons';
import { COLORS } from '@/themes/theme';
import styles from './styles';

interface TaskTitleProps {
    title?: string;
    onPress?: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
    todoStyleContainer?: StyleProp<ViewStyle>;
}

const TaskListContainer: React.FC<TaskTitleProps> = ({ title, todoStyleContainer }) => {

    const [isFinished, setIsFinished] = useState<boolean>(false);
    const [isPriority, setPriority] = useState<boolean>(false);

    const toggleIcon = () => {
        const updatedIsFinished = !isFinished;
        setIsFinished(updatedIsFinished);

        if (!updatedIsFinished) {
            Alert.alert('Task marked as undone.');
            setPriority(false);
        } else {
            Alert.alert('Task marked as done.');
        }
    };

    const togglePriority = () => {
        const updatedIsPriority = !isPriority;
        setPriority(updatedIsPriority);

        if (!updatedIsPriority) {
            Alert.alert('Priority removed.');
        } else {
            Alert.alert('Priority added.');
        }
    }

    return (
        <View style={[styles.taskContainer, todoStyleContainer]}>
            <TouchableOpacity onPress={() => {
                toggleIcon()
            }} activeOpacity={0.6}>
                <Icon name={isFinished ? 'check-circle' : 'circle'}
                    size={22}
                    color={isFinished ? 'green' : COLORS.primaryDarkGray}
                />
            </TouchableOpacity>
            <Text style={[styles.taskTitle, {
                textDecorationLine: isFinished ? 'line-through' : 'none',
                color: isFinished ? COLORS.primaryLightGray : COLORS.primaryDarkGray
            }]}>{title}</Text>
            <View style={styles.badgesContainer}>
                {isFinished ? null : (
                    <TouchableOpacity onPress={togglePriority}>
                        <Mark name={isPriority ? 'bookmark-alt' : 'bookmark'}
                            size={26}
                            color={isPriority ? 'green' : COLORS.primaryDarkGray}
                        />
                    </TouchableOpacity>
                )}
                <Badge name={isFinished ? 'police-badge' : 'police-badge'}
                    size={22}
                    color={isFinished ? 'green' : COLORS.primaryWhite}
                />
            </View>
        </View>
    )
}


export default TaskListContainer;