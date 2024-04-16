import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
    return (
        <div className="login-container">
            <form className="login-form">
                <h2>Login</h2>
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Log In </button>
                <div className='signup'> <a href="/Signup">Create account</a></div>      
            </form>
        </div>
    );
}

export default LoginPage;
