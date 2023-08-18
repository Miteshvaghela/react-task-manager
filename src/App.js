import React, {useState, useEffect} from 'react'; 
import './App.css'; 
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';

const App = ({}) => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getAllTasks = async () => {
        const allTasksData = await fetchTasks(); 
        setTasks(allTasksData);
    }
    getAllTasks();
    
  }, []);

  const fetchTasks = async () => {
    const allTasks = await fetch('http://localhost:8000/tasks');    
    const res = await allTasks.json();
    return res;
  }

  const fetchTask = async (id) => {
    const taskData = await fetch(`http://localhost:8000/tasks/${id}`);    
    const res = await taskData.json();
    return res;
  }


  const [showForm, setShowForm] = useState(false);
  const addTask = async (obj) => {
    const newTask = {
      id : Math.floor(Math.random() * 1000)+1,
      title : obj.title,
      day : obj.day, 
      reminder : obj.reminder
    }

    await fetch(`http://localhost:8000/tasks`, {
      method : 'post',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(newTask)
    });

    setTasks([...tasks, newTask]);
  }
  const showAddTaskForm = () => {
    setShowForm(!showForm);
  }

  const deleteMe = async (id) => {

    await fetch(`http://localhost:8000/tasks/${id}`, {
      method : 'delete'
    })

    setTasks(tasks.filter(task => (task.id !== id)));
  }

  const toggleMe = async (id) => {

    const task = await fetchTask(id);
    task.reminder = !task.reminder;

    await fetch(`http://localhost:8000/tasks/${id}`, {
      method : 'put',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(task)
    })


    setTasks(tasks.map(task => (task.id === id)?{...task, reminder:!task.reminder}:task))
  }

  return (
    <div className="container">
      <Header title="Task Manager" showForm={showForm} showAddTaskForm={showAddTaskForm}/>
      {showForm && <TaskForm  addTask={addTask}/>}
      <Tasks tasks={tasks} deleteMe={deleteMe} toggleMe={toggleMe} />
    </div>
  )
}

export default App;