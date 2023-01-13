import {React, useState} from 'react'; 

const TaskForm = ({ addTask }) => {

    const [title, setTitle] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const saveTask = (e) => {
        e.preventDefault();

        if(!title.length) { alert('Please enter title'); return ;}

        addTask({title, day, reminder});

        setTitle('');
        setDay('');
        setReminder(false);
    }


    return (
        <form className="add-form" onSubmit={saveTask}>
            <div className="form-control">
                <label>Title</label>
                <input type="text" placeholder="Enter task title" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Day</label>
                <input type="text" placeholder="Enter task day" value={day} onChange={e => setDay(e.target.value)} />
            </div>
            <div className="form-control-check">
                <label>Reminder</label>
                <input type="checkbox" checked={reminder} onChange={e => setReminder(e.currentTarget.checked)} />
            </div>
            <div className="form-control">
                <input type="submit" className="btn btn-block" value="Save Task" />
            </div>
        </form>
    )
}

export default TaskForm;