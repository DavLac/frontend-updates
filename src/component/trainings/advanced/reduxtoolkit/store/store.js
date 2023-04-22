import {configureStore, createSlice} from "@reduxjs/toolkit";

const counter3Slice = createSlice({
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

const counter4Slice = createSlice({
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

const store = configureStore({
    reducer: {
        counter3: counter3Slice.reducer,
        counter4: counter4Slice.reducer
    }
});

export const counter3Actions = counter3Slice.actions;
export const counter4Actions = counter4Slice.actions;
export default store;