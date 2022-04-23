import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector, useDispatch } from "react-redux";

import MainTap from '../screen/mainTap'
import Login from '../screen/login'
import Register from '../screen/register';

const Stack = createNativeStackNavigator();




export default Navigation = () => {
    const isSignedIn = useSelector(store => store.auth.token)
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isSignedIn ? (
                    <Stack.Screen name="MainTap" component={MainTap} />
                ) : (
                    <Stack.Screen name="Register" component={Register} options={{ headerTitleAlign: 'center', title: 'Đăng ký' }} />,
                    <Stack.Screen name="Login" component={Login} options={{ headerTitleAlign: 'center', title: 'Đăng nhập' }} />

                )}
            </Stack.Navigator>
        </NavigationContainer>

    )
}