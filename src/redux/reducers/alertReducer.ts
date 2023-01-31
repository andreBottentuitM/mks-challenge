import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'alert',
    initialState: {
        status: false,
        text:''
    },
    reducers: {
        setAlertStatus: (state, action) => {
            state.status = action.payload
        },
        setAlertText: (state, action) => {
            state.text = action.payload
        }
    }
})

export const { setAlertStatus, setAlertText} = slice.actions
export default slice.reducer