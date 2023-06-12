import { fireEvent, render, screen } from '@testing-library/react';
import Signup from '../signup';

describe("sign up test cases", () => {

it("should render name input", () => {
  render(<Signup/>);
  const nameInput = screen.getByPlaceholderText(/full name/i)
  fireEvent.change(nameInput,{target: {value : 'content'}})
})

it("should render phone input", () => {
  render(<Signup/>);
  fireEvent.change(screen.getByPlaceholderText(/phone number/i),{target: {value : 'content'}})
})

it("should render email input", () => {
  render(<Signup/>);
  fireEvent.change(screen.getByPlaceholderText(/email-id/i),{target: {value : 'content'}})
})

it("should render password input", () => {
  render(<Signup/>);
  fireEvent.change(screen.getByPlaceholderText("Password"),{target: {value : 'content'}})
})

it("should render form switch", async () => {
  render(<Signup/>);
  const formSwitch = await screen.findByTestId("btnFormSwitch");
  fireEvent.click(formSwitch,{target: {value : 'content'}})
  // expect(formSwitch).toBeInTheDocument();
})

it("should handle submit function",async ()=>{
  const handleSubmitMock = jest.fn();
  render(<Signup handleSubmit={handleSubmitMock}/>);
  const formElement = await screen.findByTestId("formElement");
  fireEvent.submit(formElement);
  expect(handleSubmitMock).toBeCalled(1);
})

})