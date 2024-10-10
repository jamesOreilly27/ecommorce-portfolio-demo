import { configureStore } from "@reduxjs/toolkit"
import { productApi } from "./slices"
import logger from 'redux-logger'
import { composeWithDevTools } from '@redux-devtools/extension'

const errHandling = store => next => action => {
  try {
    return next(action)
  } catch (error) {
    console.error(`Error dispatching action: ${action.type} with payload: ${JSON.stringify(action.payload)}`, error)
  }
}

const reducer = {
  [productApi.reducerPath]: productApi.reducer
}

const middleware = [
  productApi.middleware,
  logger,
  composeWithDevTools,
  errHandling
]

const store = configureStore({
  reducer: reducer,
  middleware:  getDefaultMiddleware =>
    getDefaultMiddleware().concat(...middleware)
})

export default store
