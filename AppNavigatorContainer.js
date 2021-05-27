import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const screenOptionStyle = {
  headerShown: false,
};

const Stack = createStackNavigator();

const TestScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Text Screen</Text>
  </View>
)

const AppNavigator = initialScreen => (
  <Stack.Navigator
    screenOptions={screenOptionStyle}
    initialRouteName={initialScreen}
  >
    <Stack.Screen name="Test" component={TestScreen} />

  </Stack.Navigator>
);


const AppNavigatorContainer = initialScreen => (
  <NavigationContainer>
    <AppNavigator initialScreen={initialScreen} />
  </NavigationContainer>
);

export default AppNavigatorContainer;
