import React from "react"
import EMPTY_CART_IMAGE from "../empty-card-image.jpeg";
import { Link } from "react-router-dom";

const EmptyCart = () =>{
    return (
        <div className="mx-auto mb-20 mt-4 text-center flex flex-col w-6/12">
            <img src={EMPTY_CART_IMAGE} className="w-3/4 mx-auto"/>
            <h1 className="font-bold text-xl opacity-85 mb-2">Your cart is empty</h1>
            <p className="text-sm mb-6">You can go to home page to view more restaurants</p>
            <Link to={"/"}><button className="bg-orange-500 text-white font-bold py-3 mx-auto w-3/6 hover:drop-shadow-xl">SEE RESTAURANTS NEAR YOU</button></Link>
        </div>
    )
}

export default EmptyCart;