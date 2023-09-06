import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {initialState} from './components/initialState';



//ADD REDUCERS HERE
  
//ADD LOCAL STORAGE CART ITEMS HERE

const middleware = [thunk];

// Creating the Redux store object

