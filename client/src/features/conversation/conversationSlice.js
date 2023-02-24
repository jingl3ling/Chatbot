import { createSlice } from '@reduxjs/toolkit'

export const conversationSlice = createSlice({
  name: 'conversation',
  initialState: [{by:'support',context:"Hi, how can I help you?", timestamp:Date()}],
  reducers: {
    addMessage: (state, actions) => {
      state.push(actions.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addMessage } = conversationSlice.actions

export default conversationSlice.reducer