import React, {useState} from 'react';
import './App.css';
import Signin from './sign/signin';
import Signup from './sign/signup';

function App() {
  const [currentForm, setCurrentForm] = useState('signin');

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }
  
  return (
    <div className='App'>
      {
        currentForm === "signin" ? <Signin onFormSwitch={toggleForm}/> : <Signup onFormSwitch={toggleForm}/>
      }
    
     </div>

    );
}
export default App;