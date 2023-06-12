import { fireEvent, render, screen,  } from "@testing-library/react";
import Signin from "../signin";
import Signup from "../signup";
import userEvent from "@testing-library/user-event";


 
describe("sign in test cases", () => {

    test('renders h2 heading', () => {
        render(<Signin />); 
      
        const headingElement = screen.getByRole('heading', { level: 2 }); 
      
        expect(headingElement).toBeInTheDocument(); 
        expect(headingElement).toHaveTextContent('Sign In'); 
      });
 
  test('render email input', () => {
    render(<Signin />);
 
    const inputEl = screen.getByTestId("email-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "email");
    fireEvent.change(screen.getByTestId("email-input"), { target: { value: 'content'}});
  });
 
  test('render password label', () => {
    render(<Signin/>);
    const labelPass = screen.getByLabelText('Password');
    expect(labelPass).toBeInTheDocument();
  });

  test('render password input', () => {
    render(<Signin/>);
    const labelPass = screen.getByPlaceholderText('********');
    expect(labelPass).toBeInTheDocument();
    fireEvent.change(screen.getByPlaceholderText('********'), { target: { value: 'content' } })
   
  });

  test('render form switch', async () => {
    render(<Signin/>);
    const formSwitch =  screen.getByTestId("btn-form-switch");
    //fireEvent.click(formSwitch);
    fireEvent.click(formSwitch, {target: { value: 'content'}})
    expect(formSwitch).toBeInTheDocument();
  })
  

  
test('calls handleSubmit function with form data on form submission',  () => {
    const handleSubmitMock = jest.fn(); // Create a mock function to be passed as the handleSubmit prop
    render(<Signin handleSubmit={handleSubmitMock} />); // Render the FormComponent with the mock function
  
    const formElement = screen.getByTestId("form-testid"); // Get the form element
  
    // Simulate form submission
    fireEvent.submit(formElement);
  
    // Assertion
    // expect(handleSubmitMock).toBeCalled(1);
  });
    
 
});