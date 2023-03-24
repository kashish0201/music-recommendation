import "../auth/auth.css"


const Signup = () => {
    return (
        <form className="suform">
            <h3 className="suhead">create your account</h3>
            <div className="wrapper">
                <input type="text" placeholder="enter your name" id="name"/>
            </div>
            <div className="wrapper">
                <input type="email" placeholder="enter your email" id="email"/>
            </div>
            <div className="wrapper">
                <input type="password" placeholder="set your password" id="password1"/>
            </div>
            <div className="wrapper">
                <input type="password" placeholder="confirm your password" id="password2"/>
            </div>
            <div className="wrapper">
                <button className="login-link"><a href="/Login">signup</a></button>
            </div>

        </form>
    );
}
 
export default Signup;