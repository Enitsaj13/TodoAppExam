import { StyleSheet } from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING, } from '@/themes/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primaryWhite,
    },
    signHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        bottom: SPACING.space_40
    },
    signTitle: {
        fontSize: FONTSIZE.size_18,
        fontFamily: FONTFAMILY.poppins_semibold,
        marginVertical: SPACING.space_12
    },
    signSubTitle: {
        fontFamily: FONTFAMILY.poppins_regular
    },
    signFooter: {
        flexDirection: 'row',
        margin: SPACING.space_20,
        position: 'absolute',
        bottom: 20
    },
    signFooterText: {
        color: COLORS.primaryBlack,
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_14,
    },
    signInBtn: {
        color: COLORS.primaryColor,
        fontSize: FONTSIZE.size_14,
        fontFamily: FONTFAMILY.poppins_bold,
        marginLeft: SPACING.space_4
    }
});

export default styles;