import React from 'react'
import "./LoginPageDetails.css"


function LoginPageDetails() {
  return (
    <div className='LoginPageBody'> 
        <div className="box">
    <div className="formLogin">
        <h2>Login</h2>
        <div className ="inputBox">
            <input type="text" required="required" />
            <span>Username</span>
            <i></i>
        </div>
        <div className="inputBox">
            <input type="password" required="required" />
            <span>Password</span>
            <i></i>
        </div>
        <div className="links">
            <h4 >Forgot password?</h4>
            <h4>Sign Up</h4>
        </div>
        <a href="https://akhs1.com/"><input type="submit" value="Login" /></a>
    </div>
</div>
</div>
  )
}

export default LoginPageDetails