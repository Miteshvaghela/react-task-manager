import React from 'react'; 
import Task from './Task'; 


const Tasks = ({tasks, toggleMe, deleteMe}) => {
    return (
        <>
            {tasks.length ?
                tasks.map(task => <Task task={task} key={task.id} deleteMe={deleteMe} toggleMe={toggleMe}/>)
            : 'No tasks available'}
        </>
    )
}

export default Tasks;