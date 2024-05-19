import React from 'react'
import {CDN_URL} from "../utils/constants"


const RestaurantContainer = ({allRestaurantData}) =>{
    
    const {cloudinaryImageId, name, avgRating, sla:{deliveryTime}, costForTwo, cuisines, areaName} = allRestaurantData.info;
   
    const cuisineList = cuisines.join(", ");
    const truncatedCuisines = cuisineList.length > 25 ? cuisineList.slice(0, 25) + "..." : cuisineList;
    const truncatedName = name.length <= 17 ? name : name.slice(0, 17) + "...";
    const truncatedLocality = allRestaurantData?.info?.locality?.length > 18 ? allRestaurantData?.info?.locality.slice(0, 18) : allRestaurantData?.info?.locality;
    

    return (
      <div className=" relative w-[250px]  max-h-[380px] p-1 m-5">
            {cloudinaryImageId === "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/5/d9641a0b-8541-4a1e-9171-028e860f4cc6_226031.jpg" ? <div className='w-full h-[200px] rounded-xl bg-green-200'></div> : <img className="w-full h-[200px] rounded-xl" alt="restaurant-image" src={CDN_URL + cloudinaryImageId}/>}
            {/* <img className="w-full h-[200px] rounded-xl" alt="restaurant-image" src={CDN_URL + cloudinaryImageId}/> */}
            <h3 className='font-semibold text-xl mt-3 mb-1'>{truncatedName}</h3>
            <h4 className='font-semibold mb-1'><i className="fa fa-star starColor text-white bg-green-700 rounded-full p-[2px]" aria-hidden="true"></i> {avgRating} <span className="ml-3">{deliveryTime} minutes</span> </h4>
            <h4 className='font-semibold'>{costForTwo}</h4>
            <p className='opacity-60 max-h-24 overflow-hidden '>{truncatedCuisines}</p>
            <h4 className='font-semibold'>Locality - {truncatedLocality}</h4>
            <h4 className='font-semibold'>Area - {areaName}</h4>
      </div>
    )
  };

export const restaurantOffer = (RestaurantContainer) => {
  return (props) => {
    const {allRestaurantData : {info:{ aggregatedDiscountInfoV3}}} = props;
    return (
      <div className='relative w-full'>
          <div>
          {aggregatedDiscountInfoV3?.header && <label className='absolute w-5/6 bg-gradient-black transform translate-x-2 left-4 top-[166px] p-[5px] font-black text-white text-xl z-30 rounded-lg'>{aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader}</label>}
          </div>
          <RestaurantContainer {...props} />
      </div>
    )
  }
}


export default RestaurantContainer;