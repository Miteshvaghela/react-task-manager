import {React, useState} from 'react'; 

const AddTaskForm = ({}) => {

    const [title, setTitle] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    return (
        <form className="add-form">
            <div className="form-control">
                <label>Task title</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Task day</label>
                <input type="text" value={day} onChange={e => setDay(e.target.value)} />
            </div>
            <div className="form-control-check">
                <label>Reminder</label>
                <input type="checkbox" value={reminder} onChange={e => setReminder(e.currentTarget.checked)} />
            </div>

            <div className="form-control">
            <input type="submit" className="btn btn-block" value="Save Task" />
            </div>
        </form>
    )
}

export default AddTaskForm;