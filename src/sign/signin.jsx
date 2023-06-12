import React, { useState } from "react";

export default function Signin(props)  {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(email,password)
    }
    return(
        <div className="auth-form-container">
            <form data-testid="form-testid" className="signin-form" onSubmit={handleSubmit}>
                <h2>Sign In</h2>

                <input data-testid="email-input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Enter your Email"/>
                
                <label htmlFor="password"><b>Password</b></label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="********" />

                <button type="submit">Log In</button>
            </form>
            <button data-testid='btn-form-switch' className="link-btn" onClick={() => props.onFormSwitch('signup')}>Don't have an Account ? Sign Up</button>
        </div>
    )
}