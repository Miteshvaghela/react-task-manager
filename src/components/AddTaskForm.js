import { useState } from 'react'

const AddTaskForm = ({ addTask }) => {

    const [title, setTitle] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const saveTask = (e) => {

        e.preventDefault(); 

        if(!title.length){ 
            alert('Please enter valid title');
            return;
        }

        const newObj = {
            id : Math.floor(Math.random() * 1000) + 1, 
            title : title,
            day : day, 
            reminder : reminder 
        }

        addTask(newObj);

        setTitle('');
        setDay('');
        setReminder(false);
        
    }
    return (
        <form className="add-form" onSubmit={saveTask}>
            <div className="form-control">
                <label>Title</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Day</label>
                <input type="text" value={day} onChange={e => setDay(e.target.value)} />
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

export default AddTaskForm;