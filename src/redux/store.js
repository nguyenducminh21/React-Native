import { configureStore } from '@reduxjs/toolkit'
import { createStore, combineReducers } from "redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import productReducer from '../reducers/productReducer'
import userReducer from '../reducers/userReducer'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import rootReducer from '../reducers';

const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export { store }