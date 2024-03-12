import { BsXCircle } from "react-icons/bs";

function Tasks({ tasks, deleteRecord, toogleReminder }) {

  return (
    <section className="my-5">
        <div className="tasks">

        {tasks.length?tasks.map(task => 
                <div className={`task ${task.reminder?'reminder':''} }`} key={task.id} onDoubleClick={e => toogleReminder(task.id)}>
                    <BsXCircle className="deleteBtn" onClick={() => deleteRecord(task.id)}/>
                    <h2>{task.title}</h2>       
                    <span>{task.day}</span>
                </div>
        ):<span className="fw-bold">No tasks to show</span>}

            
        </div>
    </section>
  )
}

export default Tasks


