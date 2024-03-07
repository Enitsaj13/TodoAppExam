import { StyleSheet } from 'react-native';
import { COLORS, SPACING, BORDERRADIUS, FONTSIZE } from '@/themes/theme';

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.primaryBlack,
    },
    pageContent: {
        padding: SPACING.space_20,
        flex: 1,
    },
    image: {
        alignSelf: 'center',
        margin: SPACING.space_20,
        marginTop: 70,
    },
    title: {
        color: COLORS.primaryWhite,
        fontSize: 50,
        letterSpacing: 1.3,
        marginVertical: SPACING.space_10
    },
    description: {
        color: COLORS.primaryDarkGray,
        fontSize: FONTSIZE.size_20,
        lineHeight: 28,
    },
    footer: {
        marginTop: 'auto',
    },
    buttonsRow: {
        marginTop: SPACING.space_20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SPACING.space_20
    },
    button: {
        backgroundColor: COLORS.primaryColor,
        borderRadius: BORDERRADIUS.radius_25,
        alignItems: 'center',
        paddingVertical: SPACING.space_15,
        paddingHorizontal: SPACING.space_24
    },
    buttonText: {
        color: COLORS.primaryWhite,
        fontSize: FONTSIZE.size_18
    },
    stepIndicatorContainer: {
        flexDirection: 'row',
        gap: SPACING.space_8,
        marginHorizontal: SPACING.space_16
    },
    stepIndicator: {
        flex: 1,
        height: 3,
        backgroundColor: COLORS.primaryDarkGray,
        borderRadius: BORDERRADIUS.radius_10
    },
});

export default styles;