import React from 'react';
import './SignupPage.css'
const SignupPage = () => {
    return (
        <div className="login-container">
            <form className="login-form">
                <h2>Sign Up</h2>
                <input type="text" placeholder="Username" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Sign Up</button>

            </form>
        </div>
    );
}

export default SignupPage;