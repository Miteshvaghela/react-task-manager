import React, { useState, useEffect } from 'react'; 
import './App.css'; 
import Header from './components/Header';
import AddTaskForm from './components/AddTaskForm';
import Tasks from './components/Tasks'; 
import SearchBar from './components/SearchBar'; 


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [term, setTerm] = useState('');
  const [user, setUser] = useState(); 

  useEffect(() => {
    const getTasks = async () => {         
        const fetchTasks = await fetchAllTasks(term);         
        setTasks(fetchTasks);
    }
    getTasks();

  });
 
  const fetchAllTasks = async (term) => {
    const getData = await fetch('http://localhost:8000/tasks');
    const res = await getData.json(); 
    if(term.length){ 
      return res.filter(task => (task.title.toLowerCase().includes(term)));
    }else{
      return res;
    }
  }
  const fetchTask = async (id) => {
    const getData = await fetch(`http://localhost:8000/tasks/${id}`);
    const res = getData.json(); 

    return res;
  }
  const showBtnAction = () => {
    setShowForm(!showForm);
  }

  const addTask = async (obj) => {

      await fetch('http://localhost:8000/tasks', {
        method : 'post',
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(obj)
      });

  }
  const toggleMe = async (id) => {
    const obj = await fetchTask(id);
    obj.reminder = !obj.reminder;

    await fetch(`http://localhost:8000/tasks/${id}`, {
      method : 'put',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(obj)
    });

    setTasks(tasks.map(task => (task.id === id)? {...task, reminder:!task.reminder} :task))
  }
  
  const editTask = (id, obj) => {
    // edit task 

  }

  const deleteMe = async (id) => {

    await fetch(`http://localhost:8000/tasks/${id}`, {
      method : "DELETE"
    });

    setTasks(tasks.filter(task => (task.id !== id)));
  }

  const searchFilter = (term) => {
    setTerm(term);
  }

  return (
    <div className="container">

      <Header title="Task Manager" showForm={showForm} showBtnAction={showBtnAction}/>
      {!showForm && <SearchBar searchFilter={searchFilter}/>}
      {showForm && <AddTaskForm addTask={addTask} />}
      <Tasks tasks={tasks} toggleMe={toggleMe} deleteMe={deleteMe}/>
      
    </div>
  )
}

export default App; 