import React from 'react'; 
import { FaTimes } from 'react-icons/fa';

const Task = ({task, deleteMe, toggleMe}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={id => toggleMe(task.id)} > 
            <h3>{task.text} <FaTimes style={{color:'red', cursor:'pointer'}} onClick={() => deleteMe(task.id)} /></h3>
            <span>{task.day}</span> 
        </div>
    )
}

export default Task;