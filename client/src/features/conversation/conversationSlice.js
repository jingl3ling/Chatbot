import { createSlice } from '@reduxjs/toolkit'

export const conversationSlice = createSlice({
  name: 'conversation',
  initialState: {
    value: [],
  },
  reducers: {
    userInput: (state) => {
      state.value.push('hi')
    },
  },
})

// Action creators are generated for each case reducer function
export const { userInput } = conversationSlice.actions

export default conversationSlice.reducer