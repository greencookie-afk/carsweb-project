import './SignupPage.css'

const SignupPage = () => {
    const create=()=>{
alert("Account created.");
    }
    return (

        <div className="container">
            <div className="form-container">
                <h2>Create Account</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="firstname">First Name:</label>
                        <input type="text" id="firstname" name="firstname" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Last Name:</label>
                        <input type="text" id="lastname" name="lastname" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                
                    <div className="form-group">
                        <a type="submit" onClick={create} href='/home' >Create </a>
                    </div>


                </form>
            </div>
            <div className="image-container"></div>
        </div>
    )
}

export default SignupPage