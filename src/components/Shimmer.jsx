import React from "react";
const Shimmer = () =>{
    return (
        <div className="flex flex-wrap gap-12 ml-28">
            <div className="flex">
                <div className="w-[300px] h-[40px] rounded-lg mt-5 mr-5 ml-48 bg-gray-100"></div>
                <div className="w-[90px] h-[40px] rounded-lg mt-5 mr-5 bg-gray-100"></div>
                <div className="w-[90px] h-[40px] rounded-lg mt-5 mr-5 bg-gray-100"></div>
                <div className="w-[200px] h-[40px] rounded-lg mt-5 mr-96 bg-gray-100"></div>
            </div>
            <div>
                <div className="w-[250px] h-[200px] rounded-lg bg-gray-100"></div>
                <div className="w-[200px] h-[15px] rounded-lg m-5 bg-gray-100"></div>
                <div className="w-[160px] h-[15px] rounded-lg m-5 bg-gray-100"></div>
            </div>
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((index)=>{
                return <div key={index}>
                        <div className="w-[250px] h-[200px] rounded-lg bg-gray-100"></div>
                        <div className="w-[200px] h-[15px] rounded-lg m-5 bg-gray-100"></div>
                        <div className="w-[160px] h-[15px] rounded-lg m-5 bg-gray-100"></div>
                    </div>
            })}

        </div>
    )
}

export default Shimmer;