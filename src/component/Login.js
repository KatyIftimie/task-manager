import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios';
import {Link, Redirect, useHistory} from 'react-router-dom';
import "../styling/Login.scss";

export default function Login() {
    const { register, handleSubmit, errors } = useForm({});
    const [logInMsj, setLogInMsj] = useState("");
    const [isLoggedIn, setIsLogged] = useState(false);
    const [hasError, setHasError] = useState(false);
    const history = useHistory();

    const LOGIN_API = "http://localhost:8080/api/v1/login";

    const onSubmit = (user) => {
        axios.post(LOGIN_API, user)
            .then((res) => {
                setIsLogged(true);
                setLogInMsj("Success");
                window.sessionStorage.setItem("login", user.username);
                console.log(user)
                console.log(window.sessionStorage.getItem("login"));
                setTimeout(() => {
                    history.push("/add-task");
                }, 500);
            })
            .catch((err) => {
                setHasError(true);
            });
    };

    if (hasError) {
        return (<div>
            <h1>
                {" "}
              Server internal error.
              <Redirect to="/" />
            </h1>
        </div>);
    }

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault}>
                <label>Username: </label>
                <input type="text" name="username"
                    ref={register({ required: true })} />
                {errors.username && errors.username.type === "required" && (
                    <p>Your must enter a valid Username.</p>
                )}
                <label>Password: </label>
                <input type="text" className="password-field" name="password"
                    ref={register({ required: true })}  />
                {errors.password && errors.password.type === "required" && (
                    <p>You must enter a valid password</p>
                )}
                <input type="submit" onClick={handleSubmit(onSubmit)} />
            </form>
            <Link to="/register">New user?</Link>
        </div>
    )
}
