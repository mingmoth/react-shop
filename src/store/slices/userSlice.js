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
    logoutUser: (state) => {
      state.currentUser = {}
      state.isAuthenticated = false
    }
  }
})

export const userActions = userSlice.actions

export default userSlice