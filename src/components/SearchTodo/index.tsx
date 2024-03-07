// SearchBar.tsx
import React, { useState } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ViewStyle,
    StyleProp,
    TextStyle,
    Platform,
    ColorValue
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '@/themes/theme';

interface SearchBarProps {
    onSearch: (text: string) => void;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    placeholderTextColor?: ColorValue | undefined;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, style, textStyle, placeholderTextColor }) => {

    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        onSearch(searchText);
    };

    return (
        <View style={[styles.container, style]}>
            <TextInput
                style={[styles.input, textStyle]}
                placeholder="Search tasks..."
                value={searchText}
                onChangeText={setSearchText}
                placeholderTextColor={placeholderTextColor}
            />
            <TouchableOpacity style={styles.button} onPress={handleSearch}>
                <Ionicons name="search" size={22} color="black" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: COLORS.primaryWhite,
        borderRadius: BORDERRADIUS.radius_10,
        width: '75%',
        ...Platform.select({
            ios: {
                shadowColor: COLORS.primaryLightGray,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    input: {
        flex: 1,
        paddingHorizontal: SPACING.space_16,
        paddingVertical: SPACING.space_8,
        fontSize: FONTSIZE.size_16,
        fontFamily: FONTFAMILY.poppins_regular
    },
    button: {
        padding: SPACING.space_10
    },
});

export default SearchBar;
