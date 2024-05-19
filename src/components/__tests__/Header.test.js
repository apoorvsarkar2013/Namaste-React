import { fireEvent, render, screen } from "@testing-library/react";
import Header from '../Header';
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from '../../utils/appStore'


it('should render Header Component with login button', ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    );
    
    // const loginButton = screen.getByText(/login/i);
    // expect(loginButton).toBeInTheDocument();

    const loginButton = screen.getByRole('button', { name: /login/i });
    expect(loginButton).toBeInTheDocument();

    // const cartItems = screen.getByText('Cart (0 Items)');
    // expect(cartItems).toBeInTheDocument();


});

it('should change Login button into Logout button', ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole('button', {name:/login/i});
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole('button', {name:/logout/i});
    expect(logoutButton).toBeInTheDocument();
})