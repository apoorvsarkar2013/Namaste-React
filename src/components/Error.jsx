import React from "react";
import Header from "./Header"
import Footer from "./Footer";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <Header/>
            <div className="w-9/12 h-full m-28 text-center flex flex-col justify-center items-center">
            <h1>Error {err.status}!!</h1>
            <h2>Something went wrong! Data {err.statusText}</h2>
            <h2>{err.data}</h2>
            <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=1060&t=st=1710520423~exp=1710521023~hmac=102df055f9f426c4876a851d8955573af89056516a5976da5260cc6b2c97e770" style={{width:"300px", height:"300px"}}/>
            </div>
        </div>
    )
}

export default Error;