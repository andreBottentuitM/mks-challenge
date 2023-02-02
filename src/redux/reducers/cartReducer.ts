import {createSlice} from '@reduxjs/toolkit'


const slice = createSlice({
    name: 'cart',
    initialState: {
        open: false,
        products: []
    },
    reducers: {
        setOpenCart: (state, action) => {
            state.open = action.payload
        },
        setProductsCart:(state,action)=> {
            state.products = action.payload
        }
    }
})

export const { setOpenCart, setProductsCart} = slice.actions
export default slice.reducer