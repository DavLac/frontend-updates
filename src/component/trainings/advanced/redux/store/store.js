import {createStore} from "redux";


const defaultInitialState = {
    counter1: 0,
    counter2: 0
};

const counterReducer = (state = defaultInitialState, action) => {
    if (action.type === "increment") {
        return {
            counter1: state.counter1 + 1,
            counter2: state.counter2 + 1
        }
    } else if (action.type === "decrement") {
        //...
    } else {
        return state;
    }
}

const store = createStore(counterReducer);

export default store;