import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';



//ADD REDUCERS HERE
  
//ADD LOCAL STORAGE CART ITEMS HERE

const middleware = applyMiddleware([thunk]);

// Creating the Redux store object

