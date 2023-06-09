import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    //Person(nanoid(), "Test Person", "abc@gmail.com", "12942", [ImageName("testimage.jpg", [])])
]

export const imageFilesSlice = createSlice({
  name: 'imageFiles',
  initialState,
  reducers: {
    addImage(state, action) {
        state.push(action.payload)

        console.log(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const {addImage} = imageFilesSlice.actions
export default imageFilesSlice.reducer