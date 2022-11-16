import React from 'react'
import "./LoginPageDetails.css"


function LoginPageDetails() {
 
 
// toast set data
// let closeIcon
// let progress
// const button   = document.querySelector("button"),
const  toast    = document.querySelector(".toast");
// closeIcon       = document.querySelector(".close");
const progress      = document.querySelector(".progress");

console.log("button",toast);

let timer1, timer2;
const bttn =()=> {
    console.log("done");

toast.classList.add("active");
progress.classList.add("active");

timer1 = setTimeout(() => {
    toast.classList.remove("active");
}, 5000); //1s = 1000 milliseconds

timer2 = setTimeout(() => {
    progress.classList.remove("active");
}, 5300);
};

// closeIcon.addEventListener("click", () => {
// element1.classList.remove("active");

// setTimeout(() => {
// element.classList.remove("active");
// }, 300);

// clearTimeout(timer1);
// clearTimeout(timer2);
// });



 
    return (
    <div>
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
        <div className="linksLog">
            <h4 >Forgot password?</h4>
            <h4>Sign Up</h4>
        </div>
        <a href="https://akhs1.com/"><input type="submit" value="Login" /></a>
    </div>
</div>
</div>


<div >
<div className="bodyToast"  >
              <div class='toast'  >
        
  <div className="toast-content">
    <i className="fas fa-solid fa-check check"></i>

    <div className="message">
      <span className="text text-1   ">Success</span>
      <span className="text text-2">Your changes has been saved</span>
    </div>
  
  </div>
  <i className="fa-solid fa-xmark close"></i>  
  <div class="progress"   ></div>
</div>

<button  onClick={()=>bttn()} >Show Toast</button>
</div>
</div>




</div>
  )
}

export default LoginPageDetails