
import { StyleSheet } from 'react-native';
import { COLORS, FONTSIZE, SPACING } from '@/themes/theme';

const styles = StyleSheet.create({
    inputTextContainer: {
        width: '100%',
        height: 20,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputTextStyle: {
        flex: 1,
        height: 60,
        width: '100%',
        color: COLORS.primaryWhite,
        justifyContent: 'center',
        fontSize: FONTSIZE.size_16,
        backgroundColor: COLORS.primaryWhite,
        marginHorizontal: SPACING.space_30
    }
});

export default styles