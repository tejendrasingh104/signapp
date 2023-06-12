import React, { useState } from "react";
export default function Signup(props)  {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(email,password,name,phone)
    }
   
    return(
        <div className="auth-form-container">
            <form data-testid="formElement" className="signup-form" onSubmit={handleSubmit}> 
                <h2>Sign Up</h2>

                <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="rname" id="rname" placeholder="Full Name"/>

                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" name="phone" id="phone" placeholder="Phone Number"/>

                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Email-id"/>
                
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Password" />
                <input type="password" name="cpassword" id="cpassword" placeholder="Confirm Password" />

                <button type="submit">Register</button>
            </form>
            <button data-testid="btnFormSwitch" className="link-btn" onClick={() => props.onFormSwitch("signin")}>Have an Account ? Sign In</button>
        </div>
    )
}