import { render, screen } from "@testing-library/react"
import MOCK_DATA from "../mocks/RestaurantCardMock.json"
import RestaurantCard from "../RestaurantCard"
import '@testing-library/jest-dom'


test('should render restaurant Card component ', () => {
   
    render(<RestaurantCard resdata={MOCK_DATA}/>)

    const name = screen. getByText("Labbaik Chicken Corner")

    expect(name).toBeInTheDocument()
  
})
