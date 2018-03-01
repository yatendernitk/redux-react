// import React from 'react';
// import ReactDOM from 'react-dom';
// import Redux from 'redux';
"use strict";
// const { createStore } = Redux;
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

// expect(counter(0, {type: 'INCREMENT'})).toEqual(1);
// expect(counter(1, {type: 'DECREMENT'})).toEqual(0);
// expect(counter(2, {type: 'INCREMENT'})).toEqual(3);
// expect(counter(5, {type: 'INCREMENT_test'})).toEqual(5);
const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listner => listner());
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    };

    dispatch({});

    return { getState, dispatch, subscribe };
};

const store = createStore(counter);
const Counter = ({ value, onIncrement, onDecrement }) => (
    <div>
         <h1> {value} </h1>
        <button onClick={onIncrement}> + </button>
        <button onClick={onDecrement}> - </button>
    </div>
);

// console.log(store.getState());
// store.dispatch({type: 'INCREMENT'});
// console.log(store.getState());
// store.dispatch({type: 'INCREMENT'});
// console.log(store.getState());
// store.dispatch({type: 'DECREMENT'});
// console.log(store.getState());
const render = () => {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={() =>
                store.dispatch({
                    type: 'INCREMENT'
                })
            }
            onDecrement = {() =>
                store.dispatch({
                    type: 'DECREMENT'
                })
            }
    />,
    document.getElementById('root')
    );
};

store.subscribe(render);
render();

// document.addEventListener("click", () => {
//     store.dispatch({ type: 'INCREMENT' });
// });