import React, { useState, useEffect } from 'react'
import DayCard from './DayCard';
import Navbar from './Navbar';

export default function Tasks() {
    const [tasks, setTasks] = useState([]);
    const username = window.sessionStorage.getItem('login');

    useEffect(() => {
        async function fetchData() {
            let response = await fetch(
                `http://localhost:8080/api/v1/tasks/${username}`
            );
            let data = await response.json();
            if (response.ok) {
                setTasks(data);
            } else {
                console.log("no tasks");
            }
        }
        fetchData();
    }, [username]);



    return (
        <div>
            <Navbar />
            <DayCard tasks={tasks} />
        </div>
    )
}
