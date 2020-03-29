import { createStore } from 'redux'

// state를 기록할 store
export var store = createStore(reducer);

// createStore 시 1회 실행
// return value =>  state
function reducer(state, action) {
    // init state
    if (state === undefined) {
        return { color: "yellow" }
    }

    var newState;
    if (action.type === 'CHANGE_COLOR') {
        newState = Object.assign({}, state, { color: action.color });
    }
    console.log(newState);
    return newState;
}

