import React from 'react';
import Task from './Task'; 

const Tasks = ({tasks, deleteMe, toggleMe}) => {
    return (
        <>
            {tasks.length ?
                tasks.map(task => <Task key={task.id} task={task} toggleMe={toggleMe} deleteMe={deleteMe} />)
            :'No tasks available'}
        </>
    )
}

export default Tasks;