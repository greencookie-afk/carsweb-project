import { redirect, redirectDocument } from 'react-router'
import './LoginPage.css'

const LoginPage = () => {
    
    const create=()=>{
        alert("Account created.");
            }
    
    return (
        
<div className="container">
    <div className="form-container">
        <h2>Log In</h2>
        <form>
            <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" name="email" required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" required/>
            </div>
            <div className="form-group">
                <a  type="submit" onClick={create} href='/home'>Login</a>
            </div>
            <div className="form-group">
                <a href='/signup'>create account</a>
            </div>
            
        </form>
    </div>
    <div className="image-container"></div>
</div>
    )
}

export default LoginPage