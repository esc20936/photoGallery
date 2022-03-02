import React from 'react';
import { NavigationContainer , StackActions, NavigationActions, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './views/Home.js';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
