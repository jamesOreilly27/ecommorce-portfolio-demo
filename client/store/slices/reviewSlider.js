import { createSlice } from "@reduxjs/toolkit"

export const reviewSliderSlice = createSlice({
  name: 'reviewSlider',
  initialState: {
    currentIndex: 1
  },
  reducers: {
    incrementIndex: state => {
      state.currentIndex++
    },
    decrementIndex: state => {
      state.currentIndex--
    }
  }
})

export const { incrementIndex, decrementIndex } = reviewSliderSlice.actions
export default reviewSliderSlice.reducer
