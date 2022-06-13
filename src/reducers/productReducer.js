

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTodo, updateTodo, deleteTodo, createTodo } from "../api/ApiConfig";

export const getListTodo = createAsyncThunk('todo/getListTodoKey', async (params, thunkAPI) => {
    // thunkAPI.dispatch(...)
    const list = await getTodo();
    console.log('list', list);
    return list;
});

export const updateListTodo = createAsyncThunk('todo/getListTodoKey', async (params, thunkAPI) => {
    // thunkAPI.dispatch(...)
    const list = await updateTodo(params.id, params.data);
    console.log('list', list);
    return list;
});

export const deleteListTodo = createAsyncThunk('todo/getListTodoKey', async (params, thunkAPI) => {
    // thunkAPI.dispatch(...)
    const list = await deleteTodo(params.id);
    console.log('list', list);
    return list;
});
export const createListTodo = createAsyncThunk('todo/getListTodoKey', async (params, thunkAPI) => {
    // thunkAPI.dispatch(...)
    const list = await createTodo(params);
    console.log('list', list);
    return list;
});

export const productsSlide = createSlice({
    name: 'products',
    initialState: {
        gifts: [],
        products: [],
        todo: []
    },
    reducers: {
        SEND_FROM_FATHER: (state, action) => {
            state.gifts.push(action.payload)
        },
        SEND_PRODUCT_FROM_FATHER: (state, action) => {
            state.products.push(action.payload)
        }
    },
    extraReducers: {
        // get list todo
        // [getListTodo.pending]: (state, action) => {
        //   state.loading = true;
        // },
        [getListTodo.fulfilled]: (state, action) => {
            state.loading = false;
            state.todo = action.payload.data;
        },
        // [getListTodo.rejected]: (state, action) => {
        //   state.todo = [];
        // },
        [updateListTodo.fulfilled]: (state, action) => {
            state.loading = false;
            state.todo = action.payload.data;
        },
        [deleteListTodo.fulfilled]: (state, action) => {
            state.loading = false;
            state.todo = action.payload.data;
        },
        [createListTodo.fulfilled]: (state, action) => {
            state.loading = false;
            state.todo = action.payload.data;
        },
    }
})


export const { SEND_FROM_FATHER, SEND_PRODUCT_FROM_FATHER } = productsSlide.actions

export default productsSlide.reducer