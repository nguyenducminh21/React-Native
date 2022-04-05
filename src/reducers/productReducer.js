// const initialState = {
//     gifts: [],
//     products: [],
// }

// export default function itemReducer(state = initialState, action) {
//     switch (action.type) {
//         case "SEND_FROM_FATHER":
//             return {
//                 ...state,
//                 gifts: [...state.gifts, action.data]
//             };
//         case "SEND_PRODUCT_FROM_FATHER":
//             return {
//                 ...state,
//                 products: [...state.products, action.data]
//             };
//         default:
//             return state
//     }
// }

import { createSlice } from "@reduxjs/toolkit";
export const productsSlide = createSlice({
    name: 'products',
    initialState: {
        gifts: [],
        products: [],
    },
    reducers: {
        SEND_FROM_FATHER: (state, action) => {
            state.gifts.push(action.payload)
        },
        SEND_PRODUCT_FROM_FATHER: (state, action) => {
            state.products.push(action.payload)
        }
    }
})


export const { SEND_FROM_FATHER, SEND_PRODUCT_FROM_FATHER } = productsSlide.actions

export default productsSlide.reducer