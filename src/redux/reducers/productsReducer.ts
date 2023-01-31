import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'productsTotal',
    initialState: {
        productsTotal: [
            {id:1,
            name: '',
            brand: '',
            description:'',
            photo:'',
            price:'',
            quantityAtCart:1
        }
        ],
    },
    reducers: {
        setProductsTotal:(state,action)=> {
            state.productsTotal = action.payload
        }
    }
})

export const { setProductsTotal} = slice.actions
export default slice.reducer