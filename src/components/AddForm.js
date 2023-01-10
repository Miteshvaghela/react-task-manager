import {React, useState} from 'react'; 

const AddForm = ({onSaveTask}) => {

    const [title, setTitle] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const saveMe = (e) => {
        e.preventDefault(); 

        if(!title.length){
            alert('Please enter title');
            return;
        }

        onSaveTask({title, day, reminder});        

        setTitle('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className="add-form" onSubmit={saveMe}>
            <div className="form-control">
                <label>Task title</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Task day</label>
                <input type="text" value={day} onChange={e => setDay(e.target.value)}/>
            </div>
            <div className="form-control-check">
                <label>Task title</label>
                <input type="checkbox" checked={reminder} onChange={e => setReminder(e.currentTarget.checked)}/>
            </div>
            <div className="form-control">
            <input type="submit" value="Save Task" className="btn btn-block" />
            </div>
        </form>
    )
}

export default AddForm; 