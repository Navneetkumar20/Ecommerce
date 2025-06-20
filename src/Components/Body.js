import RestaurantCard, { withPromtedLabl} from "./RestaurantCard";
import { useState,useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router"
import useOnLineStatus from "../utills/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";
import UserContext from "../utills/UserContext";

 const Body =()=>{
   const[listOfRestaurents, setListOfRestaurents]=useState([]);
   const[filterRestaurant, setFilterRestaurant]=useState([]);
   const[searchText,setSearchText]=useState("");
  
     const RestaurantCardPromted = withPromtedLabl(RestaurantCard);

   useEffect(()=>{
    fetchData();
   },[]);

   const fetchData =async()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5903494&lng=77.3047103&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
       console.log(json.data);
    //optional chaning..
    setListOfRestaurents(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setFilterRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
   };

   const onlineStatus = useOnLineStatus();

   if (onlineStatus === false) return (
   <h1>Looks like you are offline line</h1>
   );
const {loggedInUser,setUserName}=useContext(UserContext);


   if(listOfRestaurents.length === 0){
    return <Shimmer/>;
  }
    return (
        <div className="body">
            <div className="filter flex">
              <div className="search m-4 p-4">
                <input type="text"  onChange={(e)=>{
                  setSearchText(e.target.value);
                }}
                 className="border border-solid border-black" value={searchText}/>

                <button  className="px-4 py-2 bg-green-100 m-4 rounded-lg hover:bg-gray-100"  
                 onClick={()=>{
                  console.log(searchText);

                 const filterRestaurant= listOfRestaurents.filter((res)=>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );

                 setFilterRestaurant(filterRestaurant);

                }}>Search
                </button>
              </div>
              <div className=" seacrh m-4 p-4 flex items-center">
               <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-green-100" 
                onClick={()=>{
                    const filterList=listOfRestaurents.filter((res)=>res.info.avgRating>4.4);
                  setListOfRestaurents(filterList);
                }}>
                  Top Rated Restaurant
              </button>

               <label className="p-4 font-bold">Username:</label>
              <input className="border border-black p-2" 
              value={loggedInUser}
              onChange={(e)=> setUserName(e.target.value)}
              />
              </div>

            </div>
            <div className="flex flex-wrap">
              {filterRestaurant.map((restaurant) => (
            <Link key ={restaurant.info.id} 
            to={"/restaurants/"+ restaurant.info.id}>

              { restaurant.info.isOpen ?(
                <RestaurantCardPromted resData={restaurant}/>
               ):(
              <RestaurantCard  resData={restaurant}/>
               )}
             </Link>
              ))}
            </div>
        </div>
    );
 };
 export default Body;