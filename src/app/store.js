import { configureStore } from '@reduxjs/toolkit'
import peopleReducer from '../features/peopleSlice'
import imageFilesReducer from '../features/imageFilesSlice'

export default configureStore({
  reducer: {
    people: peopleReducer,
    imageFiles: imageFilesReducer
  },
})