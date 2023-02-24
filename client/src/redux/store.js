import { configureStore } from '@reduxjs/toolkit'
import conversationReducer from '../features/conversation/conversationSlice'
import typingReducer from '../features/typing/typingSlice'

export default configureStore({
  reducer: {
    conversation: conversationReducer,
    typing: typingReducer,
  },
})