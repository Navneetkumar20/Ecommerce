import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utills/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCategory";
import {useState} from "react";

const RestaurantMenu=()=>{
    const [showIndex,setShowIndex]=useState(null);
    
    const { resId }= useParams();

    const resInfo= useRestaurantMenu(resId);


       if(resInfo === null)
          return <Shimmer/>;
    
      const { name,cuisines, costForTwoMessage

       } = resInfo?.cards[2]?.card?.card?.info || {};


       const { itemCards }= 
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || [];

        const categories =  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

    return (
        <div className="text-center">
        <h1 className="font-bold my-5 text-2xl">{name}</h1>
        <p className="fond-bold text-lg">
           {cuisines} - {costForTwoMessage}
        </p>
        {/* { Accordian} */}
        {categories.map((category,index)=>(
        <RestaurantCategory key={index}data={category?.card?.card}
        showItems={index === showIndex ? true:false}
        setShowIndex={() => setShowIndex(index)}/>)
    )}
     </div>
    );
}
export default RestaurantMenu;