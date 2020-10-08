import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import axios from "axios"
import StarRatingComponent from 'react-star-rating-component';

export default function AddTask() {

    const { register, errors, handleSubmit } = useForm({});
    const [taskMessage, setTaskMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [stars, setStars] = useState(0);


    const handleStarChange = (nextValue, prevValue, name) => {
        setStars(nextValue);
        return stars;
        // console.log(nextValue, prevValue, name);

    }

    const ADD_TASK_API = "http://localhost:8080/api/v1/add-task";

    const onSubmit = (task) => {
        console.log(task)
        axios.post(ADD_TASK_API, task)
            .then((res) => {
                if (res.status === 200) {
                    setIsSubmitted(true);
                    setTaskMessage(res.data);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <div>
            <form onSubmit={(e) => e.preventDefault}>
                <label>Task Name: </label>
                <input type="text" name="name"
                    ref={register({ required: true })} placeholder="Task name" />
                {errors.name && errors.name.type === "required" && (
                    <p>Your must enter a valid task name.</p>
                )}
                <label>Day: </label>
                <select name="day" ref={register({ required: true })}>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                    <option value="saturday">Saturday</option>
                    <option value="sunday">Sunday</option>
                </select>
                <label>Difficulty: </label>
                <StarRatingComponent
                    name="difficulty"
                    ref={register({ required: true })}
                    starCount={5}
                    value={stars}
                    onStarClick={(nextValue, prevValue, name) => handleStarChange(nextValue, prevValue, name)} />
                <input type="hidden" name="difficulty" ref={register({ required: true })} value={stars} />
                <input type="hidden" name="username" ref={register({ required: true })} value={window.sessionStorage.getItem("login")}></input>
                <input type="submit" onClick={handleSubmit(onSubmit)} />
            </form>
        </div>
    )
}
