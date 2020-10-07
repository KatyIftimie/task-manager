import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';

export default function Login() {
    const { register, handleSubmit, errors } = useForm({});
    const [logInMsj, setLogInMsj] = useState("");
    const [isLoggedIn, setIsLogged] = useState(false);
    const [hasError, setHasError] = useState(false);

    const LOGIN_API = "http://localhost:8080/api/v1/login";

    const onSubmit = (user) => {
        axios.post(LOGIN_API, user)
            .then((res) => {
                setIsLogged(true);
                setLogInMsj("Success");
                window.sessionStorage.setItem("login", user.username);
                console.log(window.sessionStorage.getItem("login"));
            })
            .catch((err) => {
                setHasError(true);
            });
    };

    if (hasError) {
        return "Not found";
    }

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault}>
                <label>Username: </label>
                <input type="text" name="username"
                    ref={register({ required: true })} placeholder="User name" />
                {errors.username && errors.username.type === "required" && (
                    <p>Your must enter a valid Username.</p>
                )}
                <label>Password: </label>
                <input type="text" name="password"
                    ref={register({ required: true })} placeholder="Password" />
                {errors.password && errors.password.type === "required" && (
                    <p>You must enter a valid password</p>
                )}
                <input type="submit" onClick={handleSubmit(onSubmit)} />

            </form>
        </div>
    )
}
