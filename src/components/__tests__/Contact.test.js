import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


test('Should load the Contact Us Component', ()=>{
    render(<Contact/>);

    const heading  = screen.getAllByRole('heading');

    heading.forEach((heading)=>{
        expect(heading).toBeInTheDocument();
    })
})

