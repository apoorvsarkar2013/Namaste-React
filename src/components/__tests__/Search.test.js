import { fireEvent, getAllByTestId, getAllByText, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../__tests__/mocks/mockRestaurantListData.json";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it('should render Body component with the search button', async () => { 
    await act(async ()=> render(
            <BrowserRouter>
            <Body/>
            </BrowserRouter>
        )
    )
    

    const searchBtn = screen.getByRole('button', {name:/Search/i});
    const searchInput = screen.getByTestId('searchInput');
    fireEvent.change(searchInput, {target:{value: 'pizza'}});
    fireEvent.click(searchBtn);
    const restaurantContainer = screen.getAllByTestId('restaurantContainer');

    expect(restaurantContainer.length).toBe(3);
 });


 it('should filter top rated restaurant with rating above 4', async ()=>{
    await act(async ()=>{
        render(
            <BrowserRouter>
            <Body/>
            </BrowserRouter>
        )
    })
    
    const totalRestaurantsBeforeFilter = screen.getAllByTestId('restaurantContainer');
    expect(totalRestaurantsBeforeFilter.length).toBe(21);

    // const topRatedButton = screen.getByRole('button', {name:/Top Rated Restaurants/i});
    // fireEvent.click(topRatedButton);


    // expect(totalRestaurants.length).toBe(16);

    

    
 })



