import taskReducer from './index'
import {combineReducers} from 'redux'
export const rootReducer=combineReducers({
    items:taskReducer
})