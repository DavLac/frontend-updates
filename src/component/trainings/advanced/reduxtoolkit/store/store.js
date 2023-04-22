import {configureStore} from "@reduxjs/toolkit";
import {counter3Slice} from "./counter3-slice";
import {counter4Slice} from "./counter4-slice";

const store = configureStore({
    reducer: {
        counter3: counter3Slice.reducer,
        counter4: counter4Slice.reducer
    }
});

export const counter3Actions = counter3Slice.actions;
export const counter4Actions = counter4Slice.actions;
export default store;