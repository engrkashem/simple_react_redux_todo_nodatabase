import todoReducer from './todoes/reducer';
import filterReducer from './filter/reducer';
import {combineReducers} from 'redux';


const rootReducer=combineReducers({
    todoes:todoReducer,
    filter:filterReducer
})

export default rootReducer;