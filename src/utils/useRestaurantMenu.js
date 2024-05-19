import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "../utils/constants";

const useRestaurantMenu = (restaurantId) => {
    
    const [restaurantInfo, setRestaurantInfo] = useState(null);

    const fetchData = async () => {
        try {
            const data = await fetch(RESTAURANT_MENU_API + restaurantId);
            const json = await data.json();
            setRestaurantInfo(json.data);
        } catch (error) {
            console.error('Error fetching Data :', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log(restaurantInfo);

    

    return restaurantInfo;

};

export default useRestaurantMenu;



