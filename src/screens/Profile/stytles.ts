import { StyleSheet, Platform, } from 'react-native';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING, } from '@/themes/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primaryWhite
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    fullName: {
        fontFamily: FONTFAMILY.poppins_bold,
        fontSize: FONTSIZE.size_24,
        marginVertical: SPACING.space_20
    },
    labelText: {
        fontFamily: FONTFAMILY.poppins_semibold,
    },
    labelContainer: {
        marginBottom: SPACING.space_10
    },
    profileImage: {
        padding: SPACING.space_20,
        borderRadius: BORDERRADIUS.radius_50 * 2,
        backgroundColor: COLORS.primaryWhite,
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
    inputContainer: {
        width: '100%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: SPACING.space_40
    }
})

export default styles;