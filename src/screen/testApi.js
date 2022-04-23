import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
// import Reactotron from 'reactotron-react-native'
import axios from 'axios';
import { getTodo, createTodo, updateTodo, deleteTodo } from '../api/ApiConfig'
import { useSelector, useDispatch } from "react-redux";
import { getListTodo, updateListTodo, deleteListTodo, createListTodo } from '../reducers/productReducer';
export default function TestApi() {
    const dispatch = useDispatch()
    const listTodo = useSelector(store => store.product.todo)
    const getData = async () => {

        // const todoList = await getTodo()
        dispatch(getListTodo())
    }
    const createPost = async () => {
        const data = {
            title: 'foo',
            body: 'bar',
            userId: 1
        }
        // const todoList = await createTodo(data)
        dispatch(createListTodo(data))
    }
    const updatePost = async () => {
        const data = {
            title: 'foo',
            body: 'bar4555',
            userId: 1
        }
        // const todoList = await updateTodo({id: 1, data})
        dispatch(updateListTodo({ id: 1, data }))
    }
    const deletePost = async () => {

        // const todoList = await deleteTodo(1)
        dispatch(deleteListTodo(1))
    }
    return (
        <View>
            <Text>testApi</Text>
            <TouchableOpacity
                onPress={getData}
            >
                <Text>get api</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={createPost}
            >
                <Text>post api</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={updatePost}
            >
                <Text>update api</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={deletePost}
            >
                <Text>delete api</Text>
            </TouchableOpacity>
            <View>
                <Text>
                    {JSON.stringify(listTodo)}
                </Text>
            </View>
        </View>
    )
}