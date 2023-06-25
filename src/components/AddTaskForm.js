import { useState } from 'react'
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
const AddTaskForm = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [day, setDay] = useState(new Date());
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
            day : day.toLocaleDateString(), 
            reminder : reminder 
        }

        addTask(newObj);

        setTitle(''); 
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
                <DatePicker selected={day} value={day} onChange={date => setDay(date)}/>
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