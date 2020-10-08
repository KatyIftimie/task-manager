import React from 'react'

export default function TaskCard(props) {
    const task = props.dayTask;

    return (
        <div>
            {task.map(t => (
                <div key={t.id}>
                    <p>{t.name}</p>
                    <p>{t.difficulty}</p>
                </div>
            ))}
        </div>
    )
}
