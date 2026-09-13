import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state?.find(item => item.id == action.payload.id)
            if (existingItem) {
                existingItem.quantity += 1
                existingItem.totalPrice = existingItem.quantity * action.payload.price
                const remainingItems = state?.filter(item => item.id != existingItem.id)
                state = { ...remainingItems, existingItem }
            }
            else {
                state.push({ ...action.payload, quantity: 1, totalPrice: action.payload.price })
            }
        },
        removeCart: (state, action) => {
            return state.filter(item => item.id != action.payload)
        },
        incrementCart: (state, action) => {
            const existingItem = state?.find(item => item.id == action.payload)
            const remainingItems = state?.filter(item => item.id != action.payload)
            existingItem.quantity += 1
            existingItem.totalPrice = existingItem.quantity * action.payload.price
            state = { ...remainingItems, existingItem }
        },
        decrementCart: (state, action) => {
            const existingItem = state?.find(item => item.id == action.payload)
            const remainingItems = state?.filter(item => item.id != action.payload)
            existingItem.quantity -= 1
            existingItem.totalPrice = existingItem.quantity * action.payload.price
            state = { ...remainingItems, existingItem }
        },
        emptyCart: (state) => {
            return []
        }
    }
})

export const { addToCart, removeCart, incrementCart, decrementCart, emptyCart } = cartSlice.actions
export default cartSlice.reducer