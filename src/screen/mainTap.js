
import * as React from 'react';
import { View, Text, Button, TouchableOpacity, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector, useDispatch } from "react-redux";
import testApi from './testApi';
import { clearState } from '../reducers/auSlide';
import { SEND_FROM_FATHER, SEND_PRODUCT_FROM_FATHER } from '../reducers/productReducer'
const Tab = createBottomTabNavigator();


function HomeScreen() {
    const [textGift, setTextGift] = React.useState('')
    const [textProduct, setTextProduct] = React.useState('')
    const dispatch = useDispatch();
    const users = useSelector(store => store.user.users)

    function onSubmit() {
        dispatch(SEND_FROM_FATHER(textGift))
        setTextGift('')
    }
    const onLogout = async () => {
        dispatch(clearState())
        console.log('sdsdsa')
    }


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {users?.map((e, i) => <Text style={{ fontSize: 20 }} key={i}>Hello {e.useName}</Text>)}
            <TextInput placeholder='nhập quà' value={textGift} onChangeText={(text) => { setTextGift(text) }} />
            <TouchableOpacity
                onPress={onSubmit}
            >
                <Text>Gửi quà</Text>
            </TouchableOpacity>
            <TextInput placeholder='nhập sản phẩm' value={textProduct} onChangeText={(text) => { setTextProduct(text) }} />
            <TouchableOpacity
                onPress={() => {
                    dispatch(SEND_PRODUCT_FROM_FATHER(textProduct))
                    setTextProduct('')
                }
                }
            >
                <Text>Gửi sản phẩm</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={onLogout}
            >
                <Text>Đăng suất</Text>
            </TouchableOpacity>
        </View>
    );
}

function DetailsScreen() {

    const listGifts = useSelector(store => store.product.gifts)
    const listProducts = useSelector(store => store.product.products)

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Danh sách quà tặng</Text>
            {listGifts?.map((e, i) => <Text key={i}>{e}</Text>)}
            <Text>Danh sách sản phẩm</Text>
            {listProducts?.map((e, i) => <Text key={i}>{e}</Text>)}
        </View>
    );
}

function MainTap() {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="DetailsScreen" component={DetailsScreen} options={{ headerShown: false }} />
            <Tab.Screen name="API" component={testApi} options={{ headerShown: false }} />

        </Tab.Navigator>
    )
}

export default MainTap