import Body from "../Body";
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResList.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should render the body compnet with search button ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const search = screen.getByTestId("search");

  expect(search).toBeInTheDocument();
});

test("should search the restaurants having pizza in name ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsbeforSearch = screen.getAllByTestId("restaurant-card");

  expect(cardsbeforSearch.length).toBe(8);

  const inputBox = screen.getByTestId("input-box");

  fireEvent.change(inputBox, { target: { value: "pizza" } });

  fireEvent.click(screen.getByTestId("search"));

  const cardsAfterSearch = screen.getAllByTestId("restaurant-card");

  expect(cardsAfterSearch.length).toBe(2);
});

test("should filter top rated restaurant on clicking the button", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const button = screen.getByTestId("top-Rated-Res");

  expect(button).toBeInTheDocument();

  fireEvent.click(button);

  const cards = screen.getAllByTestId("restaurant-card");

  expect(cards.length).toBe(7);
});
