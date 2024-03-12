import React, { useState} from 'react'

function TaskForm({handleSubmit}) {


    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [reminder, setReminder] = useState(false);

    const addTask = (e) => {
        e.preventDefault();

        const obj = {
            title : title,
            day : date,
            reminder : reminder, 
            id : Math.ceil(Math.random() * 1000) + 1
        }

        handleSubmit(obj);

        setTitle('');
        setDate('');
        setReminder(false);

    }
  return (
    <div className="row task-form">
        <form onSubmit={addTask}>
            <div className="">
                <label>Task Title
                <input type="text" id="title" value={title} className='form-control' onChange={e => setTitle(e.currentTarget.value)} /></label>
            </div>
            <div className="">
                <label>Date
                <input type="text" id="date" className='form-control' value={date} onChange={e => setDate(e.currentTarget.value)} /></label>
            </div>
            <div className="form-control-check">
                <label>Reminder
                <input type="checkbox" name="reminder" id="reminder" checked={reminder} onChange={e => setReminder(e.currentTarget.checked)} /></label>
            </div>
            <div className="mt-4">
                <input type="submit" value="Save" className="btn btn-primary btn-block" />
            </div>
        </form>
    </div>
  )
}

export default TaskForm