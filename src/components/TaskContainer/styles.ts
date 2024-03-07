import { StyleSheet } from 'react-native';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING, } from '@/themes/theme';

const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: 'row',
        paddingHorizontal: SPACING.space_12,
        backgroundColor: COLORS.primaryWhite,
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        width: '95%',
        borderRadius: BORDERRADIUS.radius_8,
    },
    taskTitle: {
        position: 'absolute',
        marginLeft: SPACING.space_30,
        paddingHorizontal: SPACING.space_12,
        fontSize: FONTSIZE.size_16,
        fontFamily: FONTFAMILY.poppins_regular
    },
    badgesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})

export default styles;