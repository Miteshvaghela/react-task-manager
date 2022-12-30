import {React, useState, useEffect} from 'react'; 
import './App.css'; 
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {

    const [tasks, setTasks] = useState([]);


    useEffect(() => {
        const getTasks = async () => {
            const allTasks = await fetchTasks();

            setTasks(allTasks);
        }   
        getTasks();
    }, []);

    const fetchTasks = async () => {
        const res = await fetch('http://localhost:8000/tasks');
        const data = await res.json();

        return data;
    }
 
    const [showForm, setShowForm] = useState(false);


    const showAddForm = () => {
        setShowForm(!showForm);
    }

    const deleteMe = (id) => { 
        fetch(`http://localhost:8000/tasks/${id}`, {
            method : "DELETE"
        });
        setTasks(tasks.filter(task => (task.id !== id)))
    }

    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:8000/tasks/${id}`);
        const data = await res.json();
        return data;
    }

    const toggleMe = async (id) => {

        const getTask = await fetchTask(id);
        getTask.reminder = !getTask.reminder; 

        const res = await fetch(`http://localhost:8000/tasks/${id}`, {
            method : "PUT",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(getTask)
        });  
        setTasks(tasks.map(task => (task.id === id)? {...task, reminder:!task.reminder} :task))
    }

    const saveTask = async (obj) => {
        let newTask = {
            id : Math.floor(Math.random()*1000) +1,
            text : obj.title,
            day : obj.day,
            reminder : obj.reminder
        }        

        const res = await fetch('http://localhost:8000/tasks', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newTask)
        })

        const data = await res.json();        
        setTasks([data, ...tasks]);    
        
    }

    return (
        <div className="container">
            <Header title="Task Tracker" showAddForm={showAddForm} showForm={showForm} />
            {showForm && <AddTask saveNewTask={saveTask} />}
            <Tasks tasks={tasks} deleteMe={deleteMe} toggleMe={toggleMe}/>
        </div>
    )
}

export default App;