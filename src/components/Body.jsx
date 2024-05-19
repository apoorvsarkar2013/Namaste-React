import React from "react";
import RestaurantContainer, {restaurantOffer} from "./RestaurantContainer";
import { useState} from "react";
import Shimmer from './Shimmer'
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantCards from "../utils/useRestaurantCards";


// const Body = () =>{

//   const filteredRestaurantData = cards.filter((filteredData)=>{
//     if(filteredData?.card?.card?.gridElements?.infoWithStyle?.restaurants){
//         return filteredData;
//     }
  
//   })
//     return (
//       <div className="body-container">
//         <div className="filter">
//           <button className="filter-btn" onClick={()=>{console.log("Button Clicked")}}>Top Rated Restaurants</button>
//         </div>

//         {filteredRestaurantData.map((restaurantData)=>{
//           const {infoWithStyle:{restaurants}} = restaurantData.card.card.gridElements;
//           const {card:{card:{id}}} = restaurantData;
        
//           return (
//             <div className="restaurant-container" key={id}>
//             {
//               restaurants.map((restaurantData)=>{
//                 return (
//                   <RestaurantContainer key={restaurantData.info.id} allRestaurantData = {restaurantData} />
//                 )
//               }) 
//             }
//             </div>
//           )
//         })}
//       </div>
//     )
//   };

const Body = () =>{

  const [searchTerm, setSearchTerm] = useState("");

  const onlineStatus = useOnlineStatus();

  const [filteredData, filteredDataCopy, setFilteredDataCopy] = useRestaurantCards();

  const RestaurantOffers = restaurantOffer(RestaurantContainer);
  
  // function searchRestaurants() {
  //   const searchFilteredRestaurants = filteredData.filter((restaurant) => {
  //     return (restaurant.info.name.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').includes(searchTerm)
  //      || restaurant.info.cuisines.join("").toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').includes(searchTerm)  
  //      || restaurant.info.locality.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').includes(searchTerm)
  //      || restaurant.info.areaName.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').includes(searchTerm)
  //   )});

  //   setFilteredDataCopy(searchFilteredRestaurants);
  // }

  function searchRestaurants() {
    const searchFilteredRestaurants = filteredData.filter((restaurant) => {
      const restaurantInfo = restaurant.info;
      if (restaurantInfo) {
        return (
          restaurantInfo.name.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').includes(searchTerm) ||
          restaurantInfo.cuisines.join("").toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').includes(searchTerm) ||
          (restaurantInfo.locality && restaurantInfo.locality.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').includes(searchTerm)) ||
          (restaurantInfo.areaName && restaurantInfo.areaName.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').includes(searchTerm))
        );
      }
        return false;
    });
  
    setFilteredDataCopy(searchFilteredRestaurants);
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value.toLowerCase());
  }

  function clearSearch() {
    setSearchTerm("");
    setFilteredDataCopy(filteredData);
    document.querySelector(".search-input").value = "";
  }

  function topRatedRestaurant(){
    const filteredAbove4 = filteredData.filter((RatingAbove4)=>RatingAbove4.info.avgRating > 4);
    setFilteredDataCopy(filteredAbove4);
  }

  
  // CONDITIONAL RENDERING
  /*
  if(filteredData.length === 0){
    return <Shimmer/>
  }
  */

  if(!onlineStatus){
    return <h1>Looks like you are offline, please check your internet connection!</h1>
  }

    return filteredData.length === 0 ? <Shimmer/> : (
      <div className="mx-10 mb-28">
        <div className="flex m-4 gap-6 items-center justify-center">
            <div className="flex gap-6">
              <input data-testid="searchInput" type="text" className="search-input focus:ring-2 focus:ring-blue-500 focus:outline-none px-2 max-h-10 w-72 border border-black rounded-md hover:bg-slate-100" placeholder="Search..." value={searchTerm} onChange={handleSearchChange}/>
              <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:bg-white dark:text-black dark:border-gray-600 dark:hover:text-black dark:hover:bg-gray-200 hover:scale-95 transition ease-linear delay-75" onClick={searchRestaurants}>Search</button>
              <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:bg-white dark:text-black dark:border-gray-600 dark:hover:text-black dark:hover:bg-gray-200 hover:scale-95 transition ease-linear delay-75" onClick={clearSearch}>Clear</button>
            </div>
            <div className="filter">
              <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:bg-white dark:text-black dark:border-gray-600 dark:hover:text-black dark:hover:bg-gray-200 hover:scale-95 transition ease-linear delay-75" onClick={topRatedRestaurant}>Top Rated Restaurants</button>
            </div>
        </div>

        {filteredDataCopy.map((restaurantData)=>{ 
          return (
            <div data-testid="restaurantContainer" className="flex-wrap inline-flex mx-6 transition ease-linear delay-100 hover:scale-95" key={restaurantData.info.id}>
            <Link to={"/restaurants/" + restaurantData.info.id}>
            {restaurantData.info.aggregatedDiscountInfoV3?.header === "₹125 OFF" || "ITEMS" ? (<RestaurantOffers allRestaurantData = {restaurantData} />) : (<RestaurantContainer  allRestaurantData = {restaurantData} />)}
            </Link>
            </div> 
          )
        })}
      </div>
    )
  };

export default Body;


