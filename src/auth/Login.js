import "../auth/auth.css"
import { useState } from "react";
import { user } from "../atoms";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../axios";
import { useSetRecoilState } from "recoil";

const Login = () => {
    const navigate = useNavigate();
    const setUser = useSetRecoilState(user);
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const [error, setError] = useState(false);

    const handleSubmit = (e) => {

        e.preventDefault();
        const formData = {
            username: username,
            password: password,
        };

        console.log(formData);

        axiosInstance
            .post(`auth/login`, formData)
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
                if (err.response.status === 400) {
                    console.log("Incorrect Credentials")
                }
                setError(true);
            });
    }
    
    return (
        <div className="form-wrapper">
        
            <form className="suform">
                <h3>login to your account</h3>
                <div className="wrapper">
                    <input type="usename" placeholder="enter your username" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="wrapper">
                    <input type="password" placeholder="enter your password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                {error && <div className="wrapper " >
                    <p className="error text-center">Incorrect credentials</p>
                </div>}
                <div className="wrapper">
                    <button onClick={handleSubmit} className="submit">login</button>
                </div>
                <div className="wrapper">
                    <p className="signup-link">Don't have an account? <a href="/Signup">Signup</a></p>
                </div>
            </form>
        </div>
    );
}
 
export default Login;