import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from '@/themes/theme';
import TaskScreen from '@/screens/TaskScreen'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                // tabBarShowLabel: false,
                tabBarStyle: styles.tabBarStyle,
            }}>
            <Tab.Screen
                name="MyTodo"
                component={TaskScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name='browsers-outline'
                            size={22}
                            color={`${focused ? COLORS.primaryBlue : COLORS.primaryWhite}`}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 80,
        position: 'absolute',
        backgroundColor: COLORS.primaryWhite,
        borderTopWidth: 0.2,
        elevation: 0,
        borderTopColor: '#e2e8f0'
    },
});