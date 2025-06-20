import  {render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case",()=>{
it("shuold load contact us component",()=>{
    render(<Contact/>);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});

it("shuold load button inside contact us component",()=>{
    render(<Contact/>);

    const button = screen.getByText("submit");

    expect(button).toBeInTheDocument();
});


it("shuold load input name inside contact us component",()=>{
    render(<Contact/>);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
});


it("should load 2 input boxes on the Contact us Component", ()=>{
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    // Example assertion
    expect(inputBoxes.length).toBeTruthy();
});
});
