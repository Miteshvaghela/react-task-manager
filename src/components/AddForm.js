import {React, useState} from 'react'; 

const AddForm = ({}) => {

    const [title, setTitle] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);


    return (
        <form className="add-form">
            <div className="form-control">
                <label>Task title</label>
                <input type="text" value={title} />
            </div>
            <div className="form-control">
                <label>Task day</label>
                <input type="text" value={day} />
            </div>
            <div className="form-control-check">
                <label>Task title</label>
                <input type="checkbox" value={reminder} />
            </div>
            <div className="form-control">
            <input type="submit" value="Save Task" className="btn btn-block" />
            </div>
        </form>
    )
}

export default AddForm; 