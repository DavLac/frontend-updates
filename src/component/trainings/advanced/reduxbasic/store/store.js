import {createStore} from "redux";

export const Actions = {
    increment1: 1,
    increment2: 2
};

const defaultInitialState = {
    counter1: 0,
    counter2: 0
};

const counterReducer = (state = defaultInitialState, action) => {
    if (action.type === Actions.increment1) {
        return {
            ...state,
            counter1: state.counter1 + 1,
        }
    } else if (action.type === Actions.increment2) {
        return {
            ...state,
            counter2: state.counter2 + action.value
        }
    } else {
        return state;
    }
}

//const store = createStore(counterReducer);

//export default store;