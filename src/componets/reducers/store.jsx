import {createStore, combineReducers} from 'redux'
import { CarListReducer } from './CarListReducer';

const reducers = combineReducers({
    listCar: CarListReducer
})

export const Store = createStore(reducers);