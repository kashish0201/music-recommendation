import { useState } from "react";
import "../auth/auth.css"
import axiosInstance from "../axios";
import { useSetRecoilState } from "recoil";
import { user } from "../atoms";
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

    const handleSubmit = () => {

        setEmailError(false);
        setPassError(false);
        setUsernameError(false);

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

        if (submit) {
            axiosInstance
                .post(`auth/register`, formData)
                .then((res) => {
                    localStorage.setItem(
                        "token",
                        res.data.token
                    );

                    axiosInstance.defaults.headers["Authorization"] = "Token " + localStorage.getItem("token");

                    setUser(res.data.user);

                    navigate("/");
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    return (
        <form className="suform">
            <h3 className="suhead">create your account</h3>
            <div className="wrapper">
                <input type="text" placeholder="enter your username" id="username" value={username} onChange={e => setUsername(e.target.value)}/>
            </div>
            <div className="wrapper">
                <input type="email" placeholder="enter your email" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="wrapper">
                <input type="password" placeholder="set your password" id="password1" value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className="wrapper">
                <input type="password" placeholder="confirm your password" id="password2" value={password2} onChange={e => setPassword2(e.target.value)}/>
            </div>
            <div className="wrapper">
                <button className="login-link" onClick={handleSubmit}>signup</button>
            </div>

        </form>
    );
}
 
export default Signup;