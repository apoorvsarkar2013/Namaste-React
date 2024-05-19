import React from "react";
import { useState } from "react";

const User = (props) => {
    const [count, setCount] = useState(0)
    return (
        <div className="user-card">
            <h2>Name : {props.name}</h2>
            <h2>Location : {props.location}</h2>
            <h3>Count = {count}</h3>
            <button onClick={()=>{
                setCount(count+1)
            }}>Button</button>
            <button onClick={()=>{
                setCount(0)
            }}>Reset</button>
        </div>
    )
}

export default User;