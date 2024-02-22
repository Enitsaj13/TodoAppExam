// seperate the styling

import { StyleSheet } from 'react-native';
import { COLORS, BORDERRADIUS, FONTSIZE, SPACING } from '@/themes/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primarySecondaryWhite,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },
    addTodoContainer: {
        height: 40,
        width: 40,
        backgroundColor: COLORS.primaryBlue,
        borderRadius: BORDERRADIUS.radius_20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 100,
        right: 20,
    },
    textInputTodo: {
        color: COLORS.primaryBlack,
        justifyContent: 'center',
        fontSize: FONTSIZE.size_18,
        fontWeight: '500',
        marginHorizontal: SPACING.space_24,
        paddingVertical: SPACING.space_12
    },
    toolTipContainer: {
        backgroundColor: COLORS.primaryBlue,
        height: 60,
        width: 160,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageCompleted: {
        height: 260,
        width: 240,
        marginTop: SPACING.space_36,
    },
    completedContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    completedTitle: {
        color: COLORS.primaryDarkGray,
        fontSize: FONTSIZE.size_14,
        marginVertical: SPACING.space_10
    },
    completedSubTitle: {
        color: COLORS.primaryLightGray,
        fontSize: FONTSIZE.size_12
    },
    headerDateContainer: {
        marginVertical: SPACING.space_24,
        right: 100
    },
    headerDate: {
        paddingVertical: SPACING.space_10,
        fontSize: FONTSIZE.size_28,
        textAlign: 'left',
        fontWeight: '600'
    },
    headerDateNow: {
        fontSize: FONTSIZE.size_14,
        color: COLORS.primaryLightGray
    },
    deleteButton: {
        backgroundColor: COLORS.primaryRed,
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: '100%',
        borderTopEndRadius: BORDERRADIUS.radius_4,
        borderBottomEndRadius: BORDERRADIUS.radius_4
    },
    updateButton: {
        backgroundColor: COLORS.primaryBlue,
        borderTopEndRadius: 0,
        borderBottomEndRadius: 0,
        borderTopLeftRadius: BORDERRADIUS.radius_4,
        borderBottomLeftRadius: BORDERRADIUS.radius_4
    },
    headerToggleDarkMode: {
        left: 140,
        bottom: 80
    }
})

export default styles