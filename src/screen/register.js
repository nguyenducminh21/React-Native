
import * as React from 'react';
import { useState } from 'react';
import { View, Text, Button, TouchableOpacity, TextInput } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { signInApi } from '../reducers/auSlide'
import {
    auth,
    firebaseDatabase,
    createUserWithEmailAndPassword
} from '../../firebase/firebase'

function Register() {


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: '100%' }}>
                <View style={{ marginHorizontal: 15 }}>
                    <Text>
                        Tài khoản
                    </Text>
                    <TextInput style={{ borderColor: '#ccc', borderWidth: 2 }}
                        placeholder='nguyenducminh21042000@gmail.com...'
                    // onChangeText={(text) => { onChangeUseName(text) }}
                    />
                </View>
                <View style={{ marginHorizontal: 15 }}>
                    <Text>
                        Mật khẩu
                    </Text>
                    <TextInput style={{ borderColor: '#ccc', borderWidth: 2 }}
                        placeholder='mật khẩu...'
                    // onChangeText={(text) => { onChangePassWord(text) }}
                    />
                </View>
            </View>


            <TouchableOpacity
                style={{ backgroundColor: 'yellow', padding: 10, marginTop: 15 }}

            >
                <Text>
                    Đăng Ký
                </Text>
            </TouchableOpacity>
        </View>
    );
}
export default Register