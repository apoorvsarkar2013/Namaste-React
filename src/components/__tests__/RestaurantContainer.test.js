import { render, screen } from "@testing-library/react";
import RestaurantContainer from "../RestaurantContainer";
import MOCK_DATA from "../__tests__/mocks/restaurantContainerMock.json";
import "@testing-library/jest-dom";

it('should render the RestaurantContainer component', ()=>{
    render(
        <RestaurantContainer allRestaurantData={MOCK_DATA}/>
    );
    
    const name = screen.getByText(/Chaayos/i);
    expect(name).toBeInTheDocument();
})
