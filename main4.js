'use strict';
const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id){
                return state;
            }else{
                return {...state, completed: !state.completed}
            };
        default:
            return state;
    }
}

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, todo(undefined, action)];
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        default:
        break;
    };
};

const testAddTodo = () => {
    const stateBefore = [];
    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: "learn Redux"
    };
    const stateAfter = [
        {
            id: 0,
            text: "learn Redux",
            completed: false
        }
    ];
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);
};

const testToggleTodo = () => {
    const stateBefore = [
        {
            id: 0,
            text: "learn Redux",
            completed: false
        },
        {
            id: 1,
            text: "Go Shopping",
            completed: true
        }
    ];
    const action = {
        type: 'TOGGLE_TODO',
        id: 1
    };

    const stateAfter = [
        {
            id: 0,
            text: "learn Redux",
            completed: false
        },
        {
            id: 1,
            text: "Go Shopping",
            completed: false
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);
};

testAddTodo();
testToggleTodo();
console.log('all tests passed');