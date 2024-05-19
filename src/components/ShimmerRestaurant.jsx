import React from "react";
const ShimmerRestaurant = () =>{
    return (
        <div className="flex flex-col gap-8 my-[80px] mx-[300px]">

            <div className="w-[800px] h-44 bg-slate-100 rounded-2xl"></div>

            <div className="w-[800px] h-12 bg-slate-100 rounded-2xl"></div>

            <div className="flex gap-14">
                <div className="w-[600px] h-24 bg-slate-100 rounded-2xl"></div>
                <div className="w-[150px] h-24 bg-slate-100 rounded-2xl"></div>
            </div>
            {[1,2,3,4,5].map((index)=>{
                return <div key={index}>
                    <div className="flex gap-14">
                        <div className="w-[600px] h-24 bg-slate-100 rounded-2xl"></div>
                        <div className="w-[150px] h-24 bg-slate-100 rounded-2xl"></div>
                    </div>
                </div>
            })}

        </div>
    )
}

export default ShimmerRestaurant;