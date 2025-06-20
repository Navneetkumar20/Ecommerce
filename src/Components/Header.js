import { useState,useContext } from "react";
import { LOGO_URL } from "../utills/contents";
import { Link } from "react-router";
import useOnlineStatus from "../utills/useOnlineStatus";
import  UserContext from "../utills/UserContext";
import { useSelector } from "react-redux";

const Header =()=>{
 
const [btnNameReact,setBtnNameReact]=useState("Login");

const onlineStatus = useOnlineStatus();

const {loggedInUser} = useContext(UserContext);
//subscribing to the store using a Selector
const cartItems= useSelector((store)=> store.cart.items);

    return (
        <div className="flex sm:justify-between  bg-pink-100 shadow-lg m-3 ">
            <div className="logo-container">
                <img className="w-16" src={LOGO_URL}/>
            </div>
            <div  className="flex items-center">
                <ul  className="flex p-4">
                    <li className="px-4 hover:bg-gray-100">Online Status:{ onlineStatus ? "🟢 ":"🔴" }

                    </li>
                    <li className="px-4 hover:bg-gray-100">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4 hover:bg-gray-100"><Link to="/about">About</Link>
                    </li>
                    <li className="px-4 hover:bg-gray-100"><Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-4 hover:bg-gray-100"><Link to="/grocery">Grocery</Link>
                    </li>

                    <li className="px-4 font-bold text-xl">
                    <Link to="/cart">cart-({cartItems.length})items</Link></li>
                    <button className="login" 
                    onClick={()=>{btnNameReact==="Login"
                    ? setBtnNameReact("Logout")
                    :setBtnNameReact("Login");
                    }}
                    >{btnNameReact}</button>
                     <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>

        </div>
    );
};

export default Header;