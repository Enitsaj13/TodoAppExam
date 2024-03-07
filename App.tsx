
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Provider } from 'react-redux';
import store from '@/store/store'
import TabNavigator from '@/navigations/TabNavigator';
import OnboardingScreen from '@/screens/Onboarding';
import SignUpScreen from '@/screens/Signup';
import SignInScreen from '@/screens/Signin'
import { useTheme } from '@/themes/theme';

const Stack = createNativeStackNavigator();

const App = () => {

  const { fontsLoaded, fontError } = useTheme(); // Call the useTheme hook to get fontsLoaded and fontError

  if (!fontsLoaded && !fontError) {
    return null;
  }

  if (fontsLoaded || fontError) {
    SplashScreen.hideAsync();
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <BottomSheetModalProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen
                name="OnboardingScreen"
                component={OnboardingScreen}
                options={{ animation: 'slide_from_bottom' }}
              />
              <Stack.Screen
                name="SignInScreen"
                component={SignInScreen}
                options={{ animation: 'ios' }}
              />
              <Stack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={{ animation: 'ios' }}
              />
              <Stack.Screen
                name="TabNavigator"
                component={TabNavigator}
                options={{ animation: 'slide_from_bottom' }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </BottomSheetModalProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;




