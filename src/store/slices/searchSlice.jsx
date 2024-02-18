import { createSlice } from "@reduxjs/toolkit"

const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: "",
  },
  reducers: {
    searchHere: (state, action) => {
      state.search = action.payload
    },
  },
})

export const { searchHere } = searchSlice.actions
export default searchSlice.reducer
