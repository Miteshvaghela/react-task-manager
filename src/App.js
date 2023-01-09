import {React, useState, useEffect} from 'react'; 
import './App.css';
import Header from './components/Header'; 
import AddTask from './components/AddTask'; 
import Tasks from './components/Tasks'; 


function App() {

  const [showTaskForm, setShowTaskForm] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id : 1,
      task : 'First task',
      day : '5th feb 2023',
      reminder : true
    },
    {
      id : 2,
      task : 'second task',
      day : '5th feb 2023',
      reminder : false
    },
    {
      id : 3,
      task : 'Third task',
      day : '5th Jul 2023',
      reminder : false
    }
  ]);

  const addTask = () => {
    setShowTaskForm(!showTaskForm);
  }

  const toggleMe = (id) => {
    setTasks(tasks.map(task => (task.id === id)?{...task, reminder:!task.reminder}:task))
  }
  const deleteMe = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="container">
      <Header title="Task Tracker" addTask={addTask} showTaskForm={showTaskForm}/>
      {showTaskForm && <AddTask />}
      <Tasks tasks={tasks} toggleMe={toggleMe} deleteMe={deleteMe} />
    </div>
  );
}

export default App;
