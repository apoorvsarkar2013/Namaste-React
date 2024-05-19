import { createSlice } from "@reduxjs/toolkit";

const restaurantNameSlice = createSlice({
    name : 'restaurantName',
    initialState : {
        items : [],
    },
    reducers : {
        addRestaurantName : (state, action)=>{
            state.items = (action.payload)
            // state.items.push(action.payload)
        },
        clearRestaurantName : (state, action)=>{
            state.items.length = 0; 
        }
    }
})

export const {addRestaurantName, clearRestaurantName} = restaurantNameSlice.actions;
export default restaurantNameSlice.reducer;