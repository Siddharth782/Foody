// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import { Provider } from 'react-redux';
import { store } from './store';
import BasketScreen from './screens/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>

        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen name="Basket" component={BasketScreen} options={{ headerShown: false }} />
          <Stack.Screen name="OrderScreen" component={PreparingOrderScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Delivery" component={DeliveryScreen} options={{ headerShown: false }} />
        </Stack.Navigator>

      </NavigationContainer>
    </Provider>
  );
}

export default App;