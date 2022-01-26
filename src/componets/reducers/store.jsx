import {createStore, combineReducers} from 'redux'
import { carListReducer } from './carListReducer';

const reducers = combineReducers({
    listCar: carListReducer
})

export const store = createStore(reducers);