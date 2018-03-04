'use strict';

const addCounter = (list) => {
    // write the tests first then implement the function to make them pass.
    return [...list, 0];
};

const removeCounter = (list, index) => {
    return [
        ...list.slice(0, index),
        ...list.concat(index + 1)
    ];
    // .slice(0, index)
    // .concat(list.slice(index+1));
}

const testAddCounter = () => {
    const listBefore = [];
    const listAfter = [0];

    deepFreeze(listBefore);

    expect(
        addCounter(listBefore)
    ).toEqual(listAfter);
};

const incrementCounter = (list, index) => {
    return [...list.slice(0, index),
        ...list[index] + 1,
        ...list.slice(list.slice[index + 1])
        ];
};

const testIncrementCounter = () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 11, 20];
    deepFreeze(listBefore);
    expect(
        incrementCounter(listBefore, 1)
    ).toEqual(listAfter);

}



const testRemoveCounter = () => {
    const listBefore = [10, 20, 30];
    const listAfter = [10];
    expect(
        removeCounter(listBefore, 1)
    ).toEqual(listAfter);
};

testAddCounter();
console.log('All tests passed.');