import { createSlice } from '@reduxjs/toolkit'
import {ImageName, Person} from './components.js'
import { nanoid } from '@reduxjs/toolkit'

const initialState = [
    //Person(nanoid(), "Test Person", "abc@gmail.com", "12942", [ImageName("testimage.jpg", [])])
]

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    addPerson(state, action) {
        state.push(action.payload)
    },
    updateName(state, action) {
      state[action.payload.index].name = action.payload.newName
    },
    updateEmail(state, action) {
      state[action.payload.index].email = action.payload.newEmail
    },
    updatePhoneNumber(state, action) {
      state[action.payload.index].phoneNumber = action.payload.newPhoneNumber
    }
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const {addPerson, updateName, updateEmail, updatePhoneNumber} = peopleSlice.actions
export default peopleSlice.reducer