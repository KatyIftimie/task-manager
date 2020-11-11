import React from 'react'
import TaskCard from './TaskCard';
import "../styling/Task.scss";

export default function DayCard(props) {

    const tasks = props.tasks;
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const getTask = day => {
        const filtered = tasks.filter(t => t.day === day.toLowerCase())
        return filtered
    }

    return (
        <div className="container">
            <div className="container__col">
            {days.map((day) => (
                <div  key={day}>
                <h2  >{day}</h2>
                    <TaskCard dayTask={getTask(day)} />
                </div>

            ))}
            </div>
        </div>
    )
}
