import React from 'react'
import axios from "axios"
import StarRatingComponent from "react-star-rating-component";


export default function TaskCard(props) {
    const task = props.dayTask;

    const STATUS_API = "http://localhost:8080/api/v1/update-task-status"

    const changeTaskStatus = (e) => {
        const taskId = e.target.value
        const objectId = { "taskId": taskId }

        axios.post(STATUS_API, objectId)
            .then((res) => {
                if (res.status === 200) {
                    console.log("Task to change " + taskId)
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }



    return (
        <div className="task_element">
            {task.map(({ taskId, name, difficulty, completed }) => (
                <div  key={taskId}>
                    {completed ?
                        <input checked type="checkbox" value={taskId} onChange={e => changeTaskStatus(e)} />
                        :
                        <input type="checkbox" value={taskId} onChange={e => changeTaskStatus(e)} />}

                    <span>{name}</span>
                    <br />
                    <StarRatingComponent
                        name="difficulty"
                        starCount={5}
                        value={difficulty}
                    />


                </div>
            ))}
        </div>
    )
}
