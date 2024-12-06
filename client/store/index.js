import { configureStore } from "@reduxjs/toolkit"
import { productApi, customerApi, categoryApi, reviewApi, cartItemApi, addressApi } from "./slices"
import reviewSlider from "./slices/reviewSlider"
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
  [productApi.reducerPath]: productApi.reducer,
  [customerApi.reducerPath]: customerApi.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
  [reviewApi.reducerPath]: reviewApi.reducer,
  [cartItemApi.reducerPath]: cartItemApi.reducer,
  [addressApi.reducerPath]: addressApi.reducer,
  reviewSlider
}

const middleware = [
  productApi.middleware,
  customerApi.middleware,
  categoryApi.middleware,
  reviewApi.middleware,
  cartItemApi.middleware,
  addressApi.middleware,
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
