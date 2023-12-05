import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

import Inicio from './telas/Inicio';
import Login from './telas/Login';
import Quiz from './telas/Quiz';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Poppins': require('./misc/Poppins.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{title:' '}}/>
        <Stack.Screen name="Quiz" component={Quiz}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}