import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: { // Sinxron function`lar bura yazilir, mentiq daima buraya yazilir, asagidakilar action`dir
  },
})

//! actionlardan cixartmag ucun ve oturmek ucun ise dispatch lazimdir (app.jsx`de)
// export const {} = counterReducer.actions

export default counterReducer.reducer