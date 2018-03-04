'use strict';

const toggleToDo = (todo) => {
    // todo.completed = !todo.completed;
    // return todo;

    // return Object.assign({}, todo, {
    //     completed: !todo.completed
    // });
    return {...todo,
        completed: !todo.completed
    };
};

const testToggleToDo = () => {
    const todoBefore = {
        id: 0,
        text: 'learn Redux',
        completed: false
    };

    const todoAfter = {
        id: 0,
        text: 'learn Redux',
        completed: true
    };

    deepFreeze(todoBefore);

    expect(
        toggleToDo(todoBefore)
    ).toEqual(todoAfter);
};

testToggleToDo();
console.log('All test passed');