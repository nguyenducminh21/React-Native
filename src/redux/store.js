import * as React from 'react';
import { configureStore } from '@reduxjs/toolkit'
import { createStore, combineReducers } from "redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux";
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

import userReducer from '../reducers/userReducer'
import productReducer from '../reducers/productReducer'
import auSlide from '../reducers/auSlide'
import Navigation from './navigation'



const rootReducer = combineReducers({
    product: productReducer,
    user: userReducer,
    auth: auSlide
})

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
            // serializableCheck: {
            //     ignoredActions: [
            //         FLUSH,
            //         REHYDRATE,
            //         PAUSE,
            //         PERSIST,
            //         PURGE,
            //         REGISTER],
            // },
            serializableCheck: false,
        }),
})

export default function Store() {
    let persistor = persistStore(store)
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Navigation />
            </PersistGate>
        </Provider>
    )
}
