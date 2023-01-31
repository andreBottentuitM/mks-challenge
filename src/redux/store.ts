import {configureStore} from '@reduxjs/toolkit'

import loadingReducer from './reducers/loadingReducer'
import alertReducer from './reducers/alertReducer'
import openCartReducer from './reducers/cartReducer'
import modalReducer from './reducers/modalReducer'
import productReducer from './reducers/productsReducer'
import themeReducer from './reducers/themeReducer'


export const store = configureStore({
    reducer: {
        loading: loadingReducer,
        openCart: openCartReducer,
        alert: alertReducer,
        modal: modalReducer,
        products: productReducer,
        theme: themeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>