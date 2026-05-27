import react from "react";
import './css/LoginSignup.css';

const LoginSignup = () => {
    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">
                    Already have an account <span>Login</span>
                    <div className="loginsignup-agree">
                        <input type="checkbox" /> 
                        <p>By continuing, i agree to the <span>Terms and Conditions</span></p>
                    </div>
                </p>
            </div>
        </div>
    )
}

export default LoginSignup;