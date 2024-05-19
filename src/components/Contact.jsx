import React from "react";

const Contact = () => {
    return (
        <div className="mx-auto my-10 text-center">
            <h1 className="text-4xl font-semibold">Contact Us</h1>
            <form className="flex flex-col gap-4 mt-10 px-3">
                <input type="text" placeholder="Name" className="search-input focus:ring-2 focus:ring-blue-500 focus:outline-none px-2 max-h-10 w-72 border border-black rounded-md hover:bg-slate-100"></input>
                <input type="text" placeholder="Email" className="search-input focus:ring-2 focus:ring-blue-500 focus:outline-none px-2 max-h-10 w-72 border border-black rounded-md hover:bg-slate-100"></input>
                <input type="text" placeholder="Phone" className="search-input focus:ring-2 focus:ring-blue-500 focus:outline-none px-2 max-h-10 w-72 border border-black rounded-md hover:bg-slate-100"></input>
                <button className="py-2.5 px-5 me-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 dark:bg-orange-300 dark:text-black dark:border-gray-600 dark:hover:text-black dark:hover:bg-orange-400 hover:scale-95 transition ease-linear delay-75">Submit</button>
            </form>
        </div>
    )
}

export default Contact;