import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RideDetails from './screens/RideDetails.js'
import PriceDetails from './screens/PriceDetails.js'
import Index from './screens/index';
import TabNavigator from './screens/index';
import IdScreen from './screens/IdScreen';
import { store } from './store';
import { Provider } from 'react-redux';
import MapScreen from './screens/MapScreen.js';
import BookingDetails from './screens/BookingDetails.js';
import PhoneNumberScreen from './screens/PhoneNumberScreen.js';
import ModeScreen from './screens/ModeScreen.js'


export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
    <NavigationContainer>
    <SafeAreaProvider>
     <Stack.Navigator>
     {/* <Stack.Screen
        name = 'TabNavigator'
        component = {TabNavigator}
        options = {{
          headerShown: false
        }}
      /> */}
      {/* <Stack.Screen
      name='IdScreen'
      component = {IdScreen}
      options = {{
        headerShown: false
      }}
      /> */}
      {/* <Stack.Screen
      name='PriceDetails'
      component = {PriceDetails}
      options = {{
        headerShown: false
      }}
      /> */}
      {/* <Stack.Screen
      name='MapScreen'
      component = {MapScreen}
      options = {{
        headerShown: false
      }}
      /> */}
      <Stack.Screen
      name='RideDetails'
      component = {RideDetails}
      options = {{
        headerShown: false
      }}
      />
      {/* <Stack.Screen
      name='BookingDetails'
      component = {BookingDetails}
      options = {{
        headerShown: false
      }}
      /> */}
      {/* <Stack.Screen
      name='PhoneNumber'
      component = {PhoneNumberScreen}
      options = {{
        headerShown: false
      }}
      /> */}
      {/* <Stack.Screen
      name='ModeScreen'
      component = {ModeScreen}
      options = {{
        headerShown: false
      }}
      /> */}
    </Stack.Navigator>
    </SafeAreaProvider>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
