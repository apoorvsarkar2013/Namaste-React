import React, { useState } from "react";
import ShimmerRestaurant from "./ShimmerRestaurant";
import {RESTAURANT_MENU_IMAGE} from "../utils/constants";
import { useParams } from "react-router-dom";
import Collapse from "./Collapse";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import {useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { addRestaurantName } from "../utils/restaurantNameSlice";


const RestaurantMenu = () => {

    const {restaurantId} = useParams();

    const restaurantInfo = useRestaurantMenu(restaurantId)

    console.log(restaurantInfo)

    const [showIndex, setShowIndex] = useState(0)

    const dispatch = useDispatch()

    const handleAddItem = (item, restaurantDetails) =>{
        //Dispatch an action
        dispatch(addItem(item))
        dispatch(addRestaurantName(restaurantDetails))
        
    }

      if(restaurantInfo === null){
        return <ShimmerRestaurant/>
      }

    const {cards : cards1} = restaurantInfo; 

    console.log(cards1)

    const cardsDetails = cards1.filter((info)=>{
        if(info?.card?.card?.info){
            return info
        }
    })

    const {name : restaurantName, cuisines, areaName, avgRating, sla:{lastMileTravelString, minDeliveryTime, maxDeliveryTime}, totalRatingsString, costForTwoMessage}
     = cardsDetails[0]?.card?.card?.info;
    const restaurantDetails = cardsDetails[0]?.card?.card?.info;

    

    // const { itemCards } =
    // restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ||
    // restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    // const cardss = restaurantInfo?.cards.filter((cards)=>{
    //     if(cards?.groupedCard?.cardGroupMap?.REGULAR?.cards){
    //         return cards;
    //     }
    // })
    // console.log(cardss)
    
    const { cards } = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR

    const requiredDataItems = cards.filter((data)=>{
        if(data?.card?.card?.itemCards){
            return data
        }
    })

    return (

        <div className="my-[80px] mx-[300px]">
            <div>
                <div>
                    <h1 className="mb-6 text-2xl font-semibold">{restaurantName}</h1>
                </div>
                <div className="border-2 p-4 rounded-2xl mb-8 ring-1 ring-slate-300 drop-shadow-md">
                    <p className="mb-2 font-semibold"><i className="fa fa-star starColor text-white bg-green-700 rounded-full p-[2px] mr-2" aria-hidden="true"></i>{avgRating} <span>({totalRatingsString})</span> <span className="ml-4">{costForTwoMessage}</span> </p>
                    {Array.isArray(cuisines) ? <p className="mb-2 text-orange-500 font-medium">{cuisines.join(", ")}</p> : <p>Menu not found</p>}
                    <p className="mb-2 font-semibold">{areaName} <span className="ml-8">{lastMileTravelString}</span></p>
                    <div className="w-70 h-[2px] mb-2 bg-slate-300"></div>
                    <h4>Delivers in {minDeliveryTime}-{maxDeliveryTime} Mins</h4>
                </div>
            </div>

            {
                requiredDataItems.map((restaurantMenuData, index)=>{
                    const {title, itemCards} = restaurantMenuData?.card?.card;
                    const itemsLength = itemCards.length-2;
                    return <div key={title}>
                    {/* {console.log("showIndex", showIndex)} */}
                    {/* {console.log("index", index)} */}
                    { title !== undefined && <Collapse isCollapse={index === showIndex} toggleCollapse={()=> setShowIndex(showIndex === index ? null : index)} title={`${title} (${Array.isArray(itemCards)? itemCards.length : <p></p>})`}>
                    <ul>
                        {Array.isArray(itemCards)? (
                        itemCards.map((item, index)=>{
                            const {id, name, price, defaultPrice, description, imageId, ribbon:{text}, ratings:{aggregatedRating:{rating, ratingCountV2}}} = item.card.info;
                            return <li key={id}>
                                <div className="flex mb-10 justify-between">
                                    <div className="flex flex-col gap-1 max-w-[calc(100%-20rem)]">
                                        {/* <p>{item?.card?.info?.itemAttribute?.vegClassifier}</p>  */}
                                        {text === "Bestseller" ? <div><i className="fa fa-star text-orange-500 mr-1" aria-hidden="true"></i>
                                        <span className="text-orange-500 font-semibold">{text}</span> <p className="font-semibold text-lg">{name}</p></div> 
                                        : <p className="font-semibold text-lg">{name}</p>}
                                        <p>₹ {Math.round(price / 100) || Math.round(defaultPrice / 100)}</p>
                                        {rating && <p className="text-sm my-2"> <i className="fa fa-star text-green-800" aria-hidden="true"></i> 
                                        <span className="font-bold text-green-800">{rating}</span> <span className="opacity-70 font-medium">({ratingCountV2})</span></p>}
                                        <p className="opacity-75 overflow-hidden max-h-[6rem] line-clamp-4">{description}</p>
                                    </div>
                                    <div className="flex-shrink-0 flex justify-center items-end relative">
                                       {item?.card?.info.hasOwnProperty("imageId") === true ? <img className="object-cover w-40 h-32 rounded-xl drop-shadow-2xl" src={RESTAURANT_MENU_IMAGE + imageId}/> : <div className="w-40 h-32 rounded-xl drop-shadow-2xl bg-orange-100 flex justify-center items-center"><p className="p-1 font-medium text-sm">No Image Found</p></div>}
                                       <button className="absolute w-28 h-10 font-bold text-lg rounded-lg translate-y-5 bg-white text-green-600 hover:bg-slate-300" onClick={()=>handleAddItem(item, restaurantDetails)}>ADD</button>
                                    </div>
                                </div>
                                {index <= itemsLength && <div className='w-full h-[3px] my-4 bg-slate-200'></div>}
                            </li>
                        })
                    ): (
                        <p>No menu items found</p>   
                    )}
                </ul>
            </Collapse>}
        </div>
                })
            }
        </div>
    )
}

export default RestaurantMenu;




