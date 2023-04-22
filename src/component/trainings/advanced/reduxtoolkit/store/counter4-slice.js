import {createSlice} from "@reduxjs/toolkit";

export const counter4Slice = createSlice({
    name: "counter4",
    initialState: {
        counter4: 0
    },
    reducers: {
        increment(state) {
            state.counter4++
        },
        decreaseByValue(state, action) {
            state.counter4 -= action.payload
        }
    }
});