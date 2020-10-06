import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";

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
                    ref={register({ required: true })} placeholder="User name" />
                <label>Email address: </label>
                <input type="text" name="email"
                    ref={register({ required: true })} placeholder="Email address" />
                <label>Password: </label>
                <input type="text" name="password"
                    ref={register({ required: true })} placeholder="Password" />
                <label>Confirm password: </label>
                <input type="text" name="confirmPassword"
                    ref={register({
                        required: true,
                        validate: (value) => value === password.current || "Password don't match"
                    })} placeholder="Confirm password" />
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                <span className={isSubmitted ? "text-success" : "text-danger"}>
                    {registrationMessage}
                </span>
                <input type="submit" onClick={handleSubmit(onSubmit)} />
            </form>
        </div>
    )
}
