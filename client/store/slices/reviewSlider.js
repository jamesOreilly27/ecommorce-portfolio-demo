import { createSlice } from "@reduxjs/toolkit"

export const reviewSliderSlice = createSlice({
  name: 'reviewSlider',
  initialState: {
    currentIndex: 0,
    currentPage: 1
  },
  reducers: {
    incrementIndex: state => {
      state.currentIndex++
      state.currentPage++
    },
    decrementIndex: state => {
      state.currentIndex--
      state.currentPage--
    }
  }
})

export const { incrementIndex, decrementIndex } = reviewSliderSlice.actions
export default reviewSliderSlice.reducer
