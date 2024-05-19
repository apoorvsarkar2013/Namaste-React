import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyCard from "./EmptyCart";
import {clearCart} from "../utils/cartSlice";


const Cart = () =>{

    const cartItems = useSelector((store)=> store.cart.items)

    const restaurantStoreName = useSelector((store)=> store.restaurantName.items);

    console.log(restaurantStoreName)

    const dispatch = useDispatch()

    const clearCartItems = () =>{
        dispatch(clearCart())
    }



    if(cartItems.length === 0){
        return <EmptyCard/>
    }

    return (
        <div className="m-44">
            <div className="font-bold text-2xl">
                <h1>{restaurantStoreName.name}</h1>
                <h3>{restaurantStoreName.areaName}</h3>
            </div>
           <div className="font-bold text-xl">
           {cartItems.map((item)=>{
                return ( 
                <div key={item?.card?.info?.id}>
                    <p>{item?.card?.info?.name}</p>   
                </div>)
            })}
           </div>
           <button className="bg-slate-300 border-black text-lg font-medium p-1 rounded w-28 h-10" onClick={clearCartItems}>Clear Cart</button>
        </div>
    )
}

export default Cart;