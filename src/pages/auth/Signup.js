import { useState } from "react";
import "../auth/auth.css"
import axiosInstance from "../../axios";
import { useSetRecoilState } from "recoil";
import { user } from "../../atoms";
import { Link, useNavigate } from "react-router-dom";


const Signup = () => {
    const navigate = useNavigate();
    const setUser = useSetRecoilState(user);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const [emailError, setEmailError] = useState(false);
    const [passError, setPassError] = useState(false);
    const [pass2Error, setPass2Error] = useState(false);
    const [usernameError, setUsernameError] = useState(false);

    const handleSubmit = (e) => {

        e.preventDefault();

        setEmailError(false);
        setPassError(false);
        setUsernameError(false);
        setPass2Error(false);


        const formData = {
            username: username,
            email: email,
            password: password,
        }

        let submit = true;

        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (formData.email === "" || !emailRegex.test(formData.email)) {
            setEmailError(true);
            submit = false;
        }

        if (formData.username.length < 3 || formData.username.length > 20 || /^[\d]{1,}$/.test(formData.username)) {
            setUsernameError(true);
            submit = false;
        }

        if (formData.password.length < 8) {
            setPassError(true);
            submit = false;
        }

        if (formData.password !== password2) {
            setPass2Error(true);
            submit = false;
        }

        if (submit) {
            axiosInstance
                .post(`auth/register`, formData)
                .then((res) => {
                    localStorage.setItem(
                        "token",
                        res.data.token
                    );

                    axiosInstance.defaults.headers["Authorization"] = "Token " + localStorage.getItem("token");

                    setUser({user: res.data.user});

                    navigate("/");
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    return (
        <div className="form-wrapper">
            <form className="suform">
                <h3 className="suhead">create your account</h3>
                <div className="wrapper">
                    <input type="text" placeholder="enter your username" id="username" value={username} onChange={e => setUsername(e.target.value)}/>
                    {usernameError && <p className="error">Username cannot be purely numeric and must be atleast 3 and atmost 20 characters long</p>}
                </div>
                <div className="wrapper">
                    <input type="email" placeholder="enter your email" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    {emailError && <p className="error">Email is invalid</p>}
                </div>
                <div className="wrapper">
                    <input type="password" placeholder="set your password" id="password1" value={password} onChange={e => setPassword(e.target.value)}/>
                    {passError && <p className="error">Password must contain at least 8 characters</p>}
                </div>
                <div className="wrapper">
                    <input type="password" placeholder="confirm your password" id="password2" value={password2} onChange={e => setPassword2(e.target.value)}/>
                    {pass2Error && <p className="error">Passwords do not match</p>}
                </div>
                <div className="wrapper">
                    <button className="login-link submit" onClick={handleSubmit}>signup</button>
                </div>
            </form>
        </div>
    );
}
 
export default Signup;