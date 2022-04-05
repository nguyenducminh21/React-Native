// const initialState = {
//     users: [],
// }

// export default function itemReducer(state = initialState, action) {
//     switch (action.type) {
//         case "SEND_USER_FROM_LOGIN":
//             return {
//                 users: [
//                     ...state.users,
//                     action.data
//                 ]
//             };
//         default:
//             return state
//     }
// }


import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export const usersSlide = createSlice({
    name: 'users',
    initialState: {
        users: []
    },
    reducers: {
        SEND_USER_FROM_LOGIN: (state, action) => {
            state.users.push(action.payload)
        }
    }
})


export const { SEND_USER_FROM_LOGIN } = usersSlide.actions

export default usersSlide.reducer