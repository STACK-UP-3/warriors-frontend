// For more information visit: https://redux.js.org/basics/actions 

import { ACTION_1, ACTION_TYPE } from './actionTypes';

export const actionExample = (action)=>({
        type: ACTION_TYPE,
        action, // what the action does.
});

export const onIncrement = ({ incrementBy=1 } = {})=>({
    type: ACTION_1,
    incrementValue: incrementBy,
});

