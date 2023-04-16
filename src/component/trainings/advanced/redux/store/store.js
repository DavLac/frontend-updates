const redux = require('redux');

const defaultInitialState = {
    counter1: 0,
    counter2: 0
};

const counterReducer = (state = defaultInitialState, action) => {
    return {
        counter1: state.counter1 + 1,
        counter2: state.counter2 + 1
    }
}

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

store.subscribe(counterSubscriber);
store.dispatch({ type: 'increment'});
store.dispatch({ type: 'increment'});