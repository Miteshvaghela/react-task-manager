import Task from './Task'; 

const Tasks = ({ tasks, toggleMe, deleteMe }) => {
    return(
        <>
            {tasks.length ?
                tasks.map(task => <Task key={task.id} task={task} toggleMe={toggleMe} deleteMe={deleteMe}/>)
            : 'No tasks available' }
        </>
    )
}

export default Tasks;