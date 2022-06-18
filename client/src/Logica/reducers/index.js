import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import userReducer from "./useReducers";



const rootReducer = combineReducers({
    user: userReducer,

})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))