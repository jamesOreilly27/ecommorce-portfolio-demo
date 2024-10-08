import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'
import { middleware } from "./middleware"
import { customerReducer } from './customer'

const reducer = combineReducers({
  customer: customerReducer
})

const store = configureStore({
  reducer: reducer,
  middleware: middleware
})
