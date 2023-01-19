import { FaTimes } from 'react-icons/fa';

const Task = ({ task, toggleMe, deleteMe }) => {
    return (
        <div className={`task ${task.reminder?'reminder':''}`} onDoubleClick={e => toggleMe(task.id)}>
            <h3>{task.title} <FaTimes style={{color:'red', cursor:'pointer'}} onClick={e => deleteMe(task.id)} /></h3>
            <span>{task.day}</span>
        </div>
    )
}

export default Task;