import './signup.css';

const Signup = () => {
 return (
   <>
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>FoodShare Network - Sign Up</title>
        </head>
        <div className="container">
            <h1>FoodShare Network</h1>

            <form id="userForm" className="active">
                <label for="userEmail">Email</label>
                <input type="email" id="userEmail" placeholder="Enter your email..." required />

                <label for="userUsername">Username</label>
                <input type="text" id="userUsername" placeholder="Choose a username..." required />

                <label for="userPassword">Password</label>
                <input type="password" id="userPassword" placeholder="Create a password..." required />

                <label for="userConfirm">Confirm Password</label>
                <input type="password" id="userConfirm" placeholder="Confirm your password..." required />

                <button type="submit" className="login-button">Sign Up as User</button>
                <p className="forgot-password-sign-up">Already have an account? <a href="/">Log in</a></p>
            </form>
        </div>
   </>
 );
}
export default Signup;