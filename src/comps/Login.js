import React,{useState} from "react";
import { axiosWithAuth } from "./axiosWithAuth";
import { useHistory } from "react-router-dom";


export default function Login() {
    const history=useHistory();
    const [login, setLogin] = useState({
        username: "",
        password: ""
    });

    const handleChange = (event) => {
        
        const { name, value } = event.target;
        setLogin({
            ...login,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axiosWithAuth()
        .post("http://localhost:9000/api/login",login)
        .then(res =>{
            
            localStorage.setItem("token",res.data.token);
            console.log(localStorage.getItem("token"));
            history.push("/friendlist");

        })
        .catch(err => {
            console.log(err.message)
        })
      };

    return (
        <div className="login-cont">
            <form onSubmit={handleSubmit}>
                <p>
                    <label>
                        username:
                        <input
                            name="username"
                            type="text"
                            value={login.username}
                            onChange={handleChange}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        password:
                        <input
                            name="password"
                            type="password"
                            value={login.password}
                            onChange={handleChange}
                        />
                    </label>
                </p>
                <p>
                    <input type="submit" value="Giris Yap" />
                </p>
            </form>
        </div>
    )
}