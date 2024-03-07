import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from '@/themes/theme';
import TaskScreen from '@/screens/TaskScreen'
import MyProfile from '@/screens/Profile';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarShowLabel: true,
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
                            color={`${focused ? COLORS.primaryColor : COLORS.primaryLightGray}`}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="MyProfle"
                component={MyProfile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name='person-circle-outline'
                            size={26}
                            color={`${focused ? COLORS.primaryColor : COLORS.primaryLightGray}`}
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