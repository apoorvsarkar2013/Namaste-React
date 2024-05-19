import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import restaurantNameReducer from "./restaurantNameSlice";

const appStore = configureStore({
    reducer : {
        cart : cartReducer,
        restaurantName : restaurantNameReducer,
    }
})

appStore.subscribe(()=> console.log(appStore.getState()))

export default appStore;