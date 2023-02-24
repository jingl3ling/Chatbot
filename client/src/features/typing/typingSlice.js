import { createSlice } from '@reduxjs/toolkit'

export const typingSlice = createSlice({
  name: 'typing',
  initialState: {
    value: 1,
    user: false,
    support: false,
  },
  reducers: {
    userTyping: (state) => {
      state.user = true
    },
    supportTyping: (state) => {
      state.support = true
    },
    userNotTyping: (state) => {
      state.user = false
      },
    supportNotTyping: (state) => {
      state.support = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { userTyping, supportTyping, userNotTyping, supportNotTyping } = typingSlice.actions

export default typingSlice.reducer