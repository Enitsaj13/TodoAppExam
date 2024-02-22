import { StyleSheet, Platform } from 'react-native';
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '@/themes/theme';

const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SPACING.space_12,
        backgroundColor: COLORS.primaryWhite,
        height: 50,
        width: 340,
        borderRadius: BORDERRADIUS.radius_8,
    },
    taskTitle: {
        position: 'absolute',
        marginLeft: SPACING.space_30,
        paddingHorizontal: SPACING.space_12,
        fontSize: FONTSIZE.size_16,
    },
    badgesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})

export default styles;