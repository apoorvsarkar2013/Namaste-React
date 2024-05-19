import { useEffect, useState } from "react";
import {SWIGGY_API} from "../utils/constants";

const useRestaurantCards = () => {

    const [filteredData, setFilteredData] = useState([]);
    const [filteredDataCopy, setFilteredDataCopy] = useState([]);

    const fetchData = async () =>{
        try{
            const data = await fetch(SWIGGY_API);
            const json = await data.json();

            const {data : {cards}} = json;

            const filteredRestaurantData = cards.filter((filteredData)=>{
                if(filteredData?.card?.card?.gridElements?.infoWithStyle?.restaurants){
                    return filteredData;
                }
            })

            const mergedRestaurantData = [
                ...filteredRestaurantData[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
                ...filteredRestaurantData[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
             ];
      
            const uniqueRestaurantData = mergedRestaurantData.filter((data, index)=>{
                return index === mergedRestaurantData.findIndex((obj)=> obj.info.id === data.info.id)
            });


            setFilteredData(uniqueRestaurantData);
            setFilteredDataCopy(uniqueRestaurantData)
        }
        catch(error){
                throw error;
              }
    }

    useEffect(()=>{
        fetchData();
    }, [])

    return [filteredData, filteredDataCopy, setFilteredDataCopy]

}

export default useRestaurantCards;