import React from "react";
import { useState } from "react";

const Collapse = ({title, children, isCollapse, toggleCollapse}) => {

    // const toggleCollapse = () =>{
    //     setShowIndex() 
    // }

    return (
        <div>
            <div className="text-lg font-medium mb-6 bg-gray-100 p-2 rounded-lg flex justify-between cursor-pointer" onClick={toggleCollapse}>
                <span>{title}</span>
                <button>{isCollapse ? <i className="fa fa-chevron-down" aria-hidden="true"></i> : <i className="fa fa-chevron-up" aria-hidden="true"></i>}</button>
                {console.log(isCollapse)}
            </div>
            <div>
                {isCollapse && <div>{children}</div>}
            </div>
        </div>
    )
}

export default Collapse;
