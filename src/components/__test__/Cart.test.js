import { BrowserRouter } from "react-router-dom";
import { act, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/resMenuMock.json";
 

global.fetch = jest.fn( () =>{
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

test("should render restaurat menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <RestaurantMenu />
      </BrowserRouter>
    )
  );
});
