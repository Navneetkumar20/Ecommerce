import {fireEvent,render,screen} from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utills/appStore";
import "@testing-library/jest-dom";


it("should load Header Component with a login button",()=>{
       render(
        <BrowserRouter>
           <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
       );
  const loginButton = screen.getByRole("button",{name:"Login"});
  
  expect(loginButton).toBeInTheDocument();

});


it("should load Header Component with a cart items 0 ",()=>{
       render(
        <BrowserRouter>
           <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
       );
      const cartItems = screen.getByText("cart-(0)items");

      expect(cartItems).toBeInTheDocument();
});


it("should change Login Button to Logout button ",()=>{
       render(
        <BrowserRouter>
           <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
       );
      const loginButton = screen.getByRole("button", {name:"Login"});
      
      fireEvent.click(loginButton); 
       
      const logoutButton =screen.getByRole("button", {name:"Logout"});

      expect(logoutButton).toBeInTheDocument();
});