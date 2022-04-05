import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { store } from './src/redux/store';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import MainTap from './src/screen/mainTap'
import Login from './src/screen/login'

const Stack = createNativeStackNavigator();

function App() {

  let persistor = persistStore(store)
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="MainTap" component={MainTap} />
            <Stack.Screen name="Login" component={Login} options={{ headerTitleAlign: 'center', title: 'Đăng nhập' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>

  );
}

export default App;
