
import { StyleSheet } from 'react-native';
import { COLORS, FONTSIZE, SPACING, FONTFAMILY, BORDERRADIUS } from '@/themes/theme';

const styles = StyleSheet.create({
    inputTextContainer: {
        width: '80%',
        marginVertical: SPACING.space_10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.2,
        borderColor: COLORS.primarySecondaryWhite,
        backgroundColor: COLORS.primaryWhite,
        borderRadius: BORDERRADIUS.radius_10,
    },
    inputTextStyle: {
        flex: 1,
        height: 50,
        paddingHorizontal: SPACING.space_20,
        color: COLORS.primaryBlack,
        fontSize: FONTSIZE.size_14,
        fontFamily: FONTFAMILY.poppins_regular,
    }
});

export default styles