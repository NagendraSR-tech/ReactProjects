import {createStore, applyMiddleware} from 'redux';
import promieMiddleware from 'redux-promise';
// import thunk from 'redux-thunk'

import reducers from '../reducers';

let store = createStore(reducers, applyMiddleware(promieMiddleware))

export default store;


