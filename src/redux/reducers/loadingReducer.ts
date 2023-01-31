import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'loading',
    initialState: {
        status: true
    },
    reducers: {
        setLoadingStatus: (state, action) => {
            state.status = action.payload
        }
    }
})

export const { setLoadingStatus} = slice.actions
export default slice.reducer