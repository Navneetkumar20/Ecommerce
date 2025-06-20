import { useContext } from "react";
import { CDN_URL } from "../utills/contents";
import UserContext from "../utills/UserContext";

 const RestaurantCard=(props)=>{
  const{resData}=props;
const { loggedInUser }=useContext(UserContext);

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
} = resData?.info;

    return (
        <div className="m-4 p-4 w-[250px] rounded-lg hover:bg-gray-100">
            <img 
            className="rounded-lg"
            alt="res-logo"
             src={CDN_URL + 
             cloudinaryImageId
            }
             />
            <h3  className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating} Rating</h4>
            <h4>{costForTwo}</h4>
             <h4>User:{loggedInUser}</h4>
            
        </div>
    );
 };



 //Hiher order component

//  input- RestaurantCard =. RestaurantCardPromted

 export const withPromtedLabl =(RestaurantCard)=>{
    return(props)=>{
        return (
            <div>
            <label  className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
            <RestaurantCard  {...props}/>
            </div>
        )
    }
}
export default RestaurantCard;