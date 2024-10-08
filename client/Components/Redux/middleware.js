import { getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { composeWithDevTools } from '@redux-devtools/extension'

const errHandling = store => next => action => {
  try {
    return next(action)
  } catch (error) {
    console.error(`Error dispatching action: ${action.type} with payload: ${JSON.stringify(action.payload)}`, error)
  }
}

const middleware = getDefaultMiddleware.concat(logger, errHandling, composeWithDevTools())

export default middleware
