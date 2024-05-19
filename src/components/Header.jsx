import React, { useContext } from 'react'
import logo from "../logo-no-background.png";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/userContext';
import { useSelector } from 'react-redux';


const Header = () =>{
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext)

  const cartItems = useSelector((store)=> store.cart.items)
  // console.log(cartItems);

    return (
      <div className="flex justify-between items-center bg-orange-300 max-h-28">
        <div className="p-4">
          <Link to={"/"}><img src={logo} className="w-28 mx-3" alt="website-logo"/></Link>
        </div>
        <div className="nav-list">
        
          <ul className="flex mx-3 text-lg">
            <li className="px-4"><h4>{onlineStatus ? <p>Online Status : 🟢</p> : <p>Online Status : 🔴</p>}</h4></li>

            <li className="px-4 hover:text-orange-600"><Link to={"/"}><i className="fa fa-home" aria-hidden="true"></i> Home</Link></li>

            <li className="px-4 hover:text-orange-600"><Link to={"/grocery"}><i className="fa fa-shopping-cart" aria-hidden="true"></i> Grocery</Link></li>

            <button className='px-4 hover:text-orange-600 cursor-pointer' onClick={()=>{
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}><i className="fa fa-user" aria-hidden="true"></i> {btnName} ({loggedInUser})</button>

            <li className="px-4 hover:text-orange-600 cursor-pointer"> <Link to={"/cart/"}><i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart ({cartItems.length} Items)</Link></li>
          </ul>
        </div>
      </div>
    )
  };


export default Header;