import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import "../styling/Login.scss"

export default function Register() {
    const { register, errors, handleSubmit, watch } = useForm({});
    const [registrationMessage, setRegistrationMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const REGISTER_API = "http://localhost:8080/api/v1/register";

    const password = useRef({});
    password.current = watch("password", "");


    const onSubmit = (user) => {
        axios.post(REGISTER_API, user)
            .then((res) => {
                if (res.status === 200) {
                    setIsSubmitted(true);
                    setRegistrationMessage(res.data);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <div>
            <form onSubmit={(e) => e.preventDefault}>
                <label>Username: </label>
                <input type="text" name="username"
                    ref={register({ required: true })}  />
                {errors.username && errors.username.type === "required" && (
                    <p>Your must enter a valid Username.</p>
                )}
                <label>Email address: </label>
                <input type="text" name="email"
                    ref={register({ required: true })} />
                {errors.email && errors.email.type === "required" && (
                    <p>Your must enter your email address.</p>
                )}
                <label>Password: </label>
                <input type="text" className="password-field" name="password"
                    ref={register({ required: true })}  />
                {errors.password && errors.password.type === "required" && (
                    <p>You must enter a valid password</p>
                )}
                <label>Confirm password: </label>
                <input type="text" className="password-field" name="confirmPassword"
                    ref={register({
                        required: true,
                        validate: (value) => value === password.current || "Password don't match"
                    })} />
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                <span className={isSubmitted ? "text-success" : "text-danger"}>
                    {registrationMessage}
                </span>
                <input type="submit" className="submit-register" onClick={handleSubmit(onSubmit)} />
            </form>
        </div>
    )
}
