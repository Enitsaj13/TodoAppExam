import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Provider } from 'react-redux';
import store from '@/store/store'
import TabNavigator from '@/navigations/TabNavigator';
import OnboardingScreen from '@/screens/Onboarding';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <BottomSheetModalProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen
                name="Onboarding"
                component={OnboardingScreen}
              />
              <Stack.Screen
                name="TabNavigator"
                component={TabNavigator}
                options={{ animation: 'slide_from_bottom' }}>
              </Stack.Screen>

            </Stack.Navigator>
          </NavigationContainer>
        </BottomSheetModalProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;




