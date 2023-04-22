import {createSlice} from "@reduxjs/toolkit";

export const counter3Slice = createSlice({
    name: "counter3",
    initialState: {
        counter3: 0
    },
    reducers: {
        decrement(state) {
            state.counter3--
        },
        increaseByValue(state, action) {
            state.counter3 += action.payload.value
        }
    }
});