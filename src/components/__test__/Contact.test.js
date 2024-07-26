import { render,screen }  from "@testing-library/react"
import Contact from "../Contact"
import '@testing-library/jest-dom'


test('should render the contact us page', () => {

    render(<Contact/>)

    const heading = screen.getAllByRole('heading')

    expect(heading.length).toBe(3)
  
})
