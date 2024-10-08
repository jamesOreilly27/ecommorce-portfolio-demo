import axios from 'axios'

const GOT_USER = 'GOT_CUSTOMER'
const UPDATED_USER = 'UPDATED_CUSTOMER'

const gotUser = user => ({
  type: GOT_USER,
  payload: user
})

const updatedUser = user => ({
  type: UPDATED_USER,
  payload: user
})

export default customerReducer
