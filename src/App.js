import {React, useState, useEffect} from 'react'; 
import './App.css';
import Header from './components/Header';
import AddForm from './components/AddForm'; 
import Tasks from './components/Tasks'; 
// https://github.com/Miteshvaghela/react-task-manager.git

const App = ({}) => {
  const [showAddForm, setShowAddFrom] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getAllTasks = async () =>{
        const data = await fetchTasks();

        setTasks(data);
    }
    getAllTasks();
  }, []);

  const fetchTasks = async () => {
    const allTasks = await fetch('http://localhost:8000/tasks');
    const res = await allTasks.json();
    return res;
  }

  const fetchTask = async (id) => {
    const task = await fetch(`http://localhost:8000/tasks/${id}`);
    const res = await task.json();
    return res;
  }


  const onAddForm = () => {
    setShowAddFrom(!showAddForm);    
  }

  const onSaveTask = async (obj) => {
    
    const newTask = {
      id : Math.floor(Math.random()*1000)+1,
      title : obj.title,
      day : obj.day,
      reminder : obj.reminder
    }

    await fetch('http://localhost:8000/tasks',{
      method : 'post',
      body : JSON.stringify(newTask),
      headers : {
        'content-type':'application/json'
      }
    })

    setTasks([...tasks, newTask]);
  } 

  const toggleMe = async (id) => {

    const obj = await fetchTask(id);

    obj.reminder = !obj.reminder;
    console.log(obj);

    await fetch(`http://localhost:8000/tasks/${id}`, {
      method : 'put',
      headers : {
        'content-type':'application/json'
      },
      body: JSON.stringify(obj)
    });

    setTasks(tasks.map(task => (task.id == id)?{...task, reminder:!task.reminder}:task));
  }

  const deleteMe = async (id) => {

    await fetch(`http://localhost:8000/tasks/${id}`, {
      method : 'delete'
    })
    setTasks(tasks.filter(task => (task.id !== id)));
  }

  return (
    <div className="container">
      <Header title="Task Manager" onAddForm={onAddForm} showAddForm={showAddForm}/>
      {showAddForm && <AddForm onSaveTask={onSaveTask} />}
      <Tasks tasks={tasks} deleteMe={deleteMe} toggleMe={toggleMe}/>
    </div>
  )
}

export default App;