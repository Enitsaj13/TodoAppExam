
import React, { useState } from 'react';
import { Modal, View, TextInput, Button, StyleSheet } from 'react-native';
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '@/themes/theme';

interface EditTodoModalProps {
    visible: boolean;
    onEdit: (newText: string) => void;
    onClose: () => void;
    initialText: string;
}

const EditTodoModal: React.FC<EditTodoModalProps> = ({ visible, onEdit, onClose, initialText }) => {
    const [text, setText] = useState(initialText);

    const handleEdit = () => {
        console.log("Saving text:", text); // Log to verify when the function is called
        onEdit(text);
        onClose();
    };

    return (
        <Modal visible={visible} animationType="slide" transparent>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <TextInput
                        style={styles.input}
                        value={text}
                        onChangeText={setText}
                        placeholder="Enter new text"
                        placeholderTextColor={COLORS.primaryDarkGray}
                    />
                    <View style={styles.buttonContainer}>
                        <Button title="Save"
                            onPress={handleEdit}
                            color={COLORS.primaryColor}
                        />
                        <Button title="Cancel"
                            onPress={onClose}
                            color={COLORS.primaryRed}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: COLORS.primaryWhite,
        padding: SPACING.space_30,
        borderRadius: BORDERRADIUS.radius_10,
        elevation: 5,
        width: '60%'
    },
    input: {
        borderBottomWidth: 1,
        borderColor: COLORS.primaryLightGray,
        marginBottom: SPACING.space_20,
        fontSize: FONTSIZE.size_16,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

export default EditTodoModal;

