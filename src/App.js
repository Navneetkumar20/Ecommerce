import React, {useState, useEffect, lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import UserContext from "./utills/UserContext";
import { Provider } from "react-redux";
import appStore from "./utills/appStore";
import Cart from "./Components/Cart";

   
// chunking
// codespliting
// lazyloading
// dynamic bundling

const Grocery= lazy(()=>import("./Components/Grocery"));
const Layout=()=>{
 const [userName, setUserName]= useState();


useEffect(()=>{
          const data={
            name:" ",
          }
          setUserName(data.name);
},[]);

    return(
        <Provider store={appStore}>
          <UserContext.Provider  value={{loggedInUser:userName, setUserName }}>
          <div className="app">
           <Header/>
            <Outlet/>
              </div>
             </UserContext.Provider>
         </Provider>
    );
};


const appRouter = createBrowserRouter([
    {
        path:"/", element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Body />,
            },
            {
           path:"/about", 
           element:<About/>,
           },
        {
        path:"/contact", 
        element:<Contact/>,
        },
        {
            path:"/grocery",
            element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
        },
         {
           path:"/restaurants/:resId", 
          element:<RestaurantMenu/>,
         },
         {
           path:"/cart", 
           element:<Cart/>,
           },
        ],
        errorElement:<Error/>,
    },
]);
 const root= ReactDOM.createRoot(document.getElementById("root"));
 
 root.render(<RouterProvider router={appRouter}/>);