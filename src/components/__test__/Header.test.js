import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("should render header component", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const loginButton = screen.getByRole("button", { name: /Login/i });

  expect(loginButton).toBeInTheDocument();
});

test("should have cart (0 items) ", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const cart = screen.getByText("Cart (0)");

  expect(cart).toBeInTheDocument();
});

test("should get logout button after clicking on login button ", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const loginButton = screen.getByRole("button", {name: /Login/i});

  fireEvent.click(loginButton);

  const logoutButton  = screen.getByRole("button", {name: "Logout"})

  expect(logoutButton).toBeInTheDocument();
});
