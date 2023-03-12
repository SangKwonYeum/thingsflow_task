import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Detail } from 'screens';
import AppProvider from 'app_provider';
import { RootStackParamList } from 'types/screen';

const Stack = createStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Detail' component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;
