import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    currentUser: {},
  },
  reducers: {
    loginUser: (state, action) => {
      state.currentUser = action.payload
      state.isAuthenticated = true
    },
  }
})

export const userActions = userSlice.actions

export default userSlice