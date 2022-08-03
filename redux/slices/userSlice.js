import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: '',
    firstName: '',
    profileImgSrc: ''
  },
  reducers: {
    insertToken: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.token = action.payload
    },
    insertUserDetails: (state, action) => {
      state.firstName = action.payload.firstName
      state.profileImgSrc = action.payload.profileImgSrc
    },
    clearUser: () => {
      return {...userSlice.getInitialState()} 
    },
  },
})

// Action creators are generated for each case reducer function
export const { insertToken, insertUserDetails, clearUser } = userSlice.actions

export default userSlice.reducer