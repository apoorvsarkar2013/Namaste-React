import React, {Suspense, lazy, useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart"; 


const Grocery = lazy(()=> import("./components/Grocery"))

const AppLayout = () =>{
  const [userName, setUserName] = useState()
  

  const fetchData = async ()=> {
    const data = await fetch("https://api.github.com/users/apoorvsarkar2013");
    const json = await data.json();

    setUserName(json.name)
  }

  useEffect(()=>{
    fetchData()
  }, [])


  return (
    <Provider store={appStore}>
        <div className="min-h-lvh flex flex-col">
      <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
        <Header/>
      </UserContext.Provider>
        <Outlet/>
        <Footer/>
        </div>
    </Provider>
  )
};

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout />,
    children : [
      {
        path : "/",
        element : <Body/>,
      },
      {
        path : "/about",
        element : <About />,
      },
      {
        path : "/contact",
        element : <Contact />, 
      },
      {
        path : "/grocery",
        element : <Suspense fallback={<h1>Loading...</h1>}>
          <Grocery />
        </Suspense>, 
      },
      {
        path : "/restaurants/:restaurantId",
        element : <RestaurantMenu />, 
      },
      {
        path : "/cart",
        element : <Cart />, 
      },
    ],
    errorElement : <Error/>,
  },
  
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

