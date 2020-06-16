import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducersCombination from './reducers/index';



export default ()=>{
    const store = createStore(
        reducersCombination, {}, 
        composeWithDevTools(applyMiddleware(thunk,promise))
    );
    
    return store;
}
