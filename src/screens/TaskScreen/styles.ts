// seperate the styling
import { StyleSheet, Platform } from 'react-native';
import { COLORS, BORDERRADIUS, FONTSIZE, SPACING, FONTFAMILY } from '@/themes/theme';

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
        backgroundColor: COLORS.primaryColor,
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
        fontFamily: FONTFAMILY.poppins_semibold,
        marginHorizontal: SPACING.space_24,
        paddingVertical: SPACING.space_12
    },
    toolTipContainer: {
        backgroundColor: COLORS.primaryColor,
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
        fontFamily: FONTFAMILY.poppins_regular,
        marginVertical: SPACING.space_10
    },
    completedSubTitle: {
        color: COLORS.primaryLightGray,
        fontSize: FONTSIZE.size_12,
        fontFamily: FONTFAMILY.poppins_light
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
    },
    flatListContainer: {
        gap: 10,
        padding: 10,
        marginTop: SPACING.space_30,
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
    headerDateContainer: {
        marginVertical: SPACING.space_24,
        alignSelf: 'flex-start',
        marginLeft: SPACING.space_36,
    },
    headerDate: {
        paddingVertical: SPACING.space_10,
        fontSize: FONTSIZE.size_28,
        fontFamily: FONTFAMILY.poppins_bold,
        textAlign: 'left',
    },
    headerDateNow: {
        fontSize: FONTSIZE.size_14,
        color: COLORS.primaryLightGray,
        fontFamily: FONTFAMILY.poppins_regular
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
        backgroundColor: COLORS.primaryColor,
        borderTopEndRadius: 0,
        borderBottomEndRadius: 0,
        borderTopLeftRadius: BORDERRADIUS.radius_4,
        borderBottomLeftRadius: BORDERRADIUS.radius_4
    },
    headerToggleDarkMode: {
        left: 140,
        bottom: 80
    },
    filterContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: SPACING.space_20,
        borderRadius: BORDERRADIUS.radius_10,
        height: 50,
        width: 50,
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
    }
})

export default styles