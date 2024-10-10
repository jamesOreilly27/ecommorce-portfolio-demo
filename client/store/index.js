import { configureStore } from "@reduxjs/toolkit"
import { productApi } from "./productSlice"

const reducer = {
  [productApi.reducerPath]: productApi.reducer
}

const apiMiddlewares = [
  productApi.middleware
]

const store = configureStore({
  reducer: reducer,
  middleware:  getDefaultMiddleware =>
    getDefaultMiddleware().concat(...apiMiddlewares)
})

export default store
