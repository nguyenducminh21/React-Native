
import * as React from 'react';
import { View, Text, Button, TouchableOpacity, TextInput } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { SEND_USER_FROM_LOGIN } from '../reducers/userReducer'


function Login({ navigation }) {
    const dispatch = useDispatch();

    const [user, setUser] = React.useState({
        useName: '',
        passWord: ''
    })

    function handleOnpress() {
        dispatch(SEND_USER_FROM_LOGIN(user))
        navigation.navigate('MainTap')
        console.log(user)
    }
    function onChangeUseName(text) {
        setUser({
            ...user,
            useName: text,
        })

    }
    function onChangePassWord(text) {
        setUser({
            ...user,
            passWord: text
        })
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: '100%' }}>
                <View style={{ marginHorizontal: 15 }}>
                    <Text>
                        Tài khoản
                    </Text>
                    <TextInput style={{ borderColor: '#ccc', borderWidth: 2 }}
                        placeholder='nguyenducminh21042000@gmail.com...'
                        onChangeText={(text) => { onChangeUseName(text) }} />
                </View>
                <View style={{ marginHorizontal: 15 }}>
                    <Text>
                        Mật khẩu
                    </Text>
                    <TextInput style={{ borderColor: '#ccc', borderWidth: 2 }}
                        placeholder='mật khẩu...'
                        onChangeText={(text) => { onChangePassWord(text) }}
                    />
                </View>
            </View>


            <TouchableOpacity
                style={{ backgroundColor: 'yellow', padding: 10, marginTop: 15 }}
                onPress={handleOnpress}
            >
                <Text>
                    Đăng Nhập
                </Text>
            </TouchableOpacity>
        </View>
    );
}
export default Login