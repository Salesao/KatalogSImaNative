import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import fetchItems from "./Reducers/fetchItemsSlice";

const rootReducer = combineReducers({
    fetchItems
})


export default configureStore({
    reducer:rootReducer,
    middleware: getDefaultMiddleware
})