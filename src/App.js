import {React, useState} from 'react'; 
import './App.css';
import Header from './components/Header';
import AddForm from './components/AddForm'; 
import Tasks from './components/Tasks'; 
// https://github.com/Miteshvaghela/react-task-manager.git
const App = ({}) => {

  const [showAddForm, setShowAddFrom] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id : 1,
      title : 'First task',
      day : '3rd jan 2023',
      reminder : true
    },
    {
      id : 2,
      title : 'Second task',
      day : '3rd Feb 2023',
      reminder : true
    },
    {
      id : 3,
      title : 'Third task',
      day : '5th March 2023',
      reminder : false
    },
  ])

  const onAddForm = () => {
    setShowAddFrom(!showAddForm);
  }

  const onSaveTask = (obj) => {
    console.log(obj);
  } 

  const toggleMe = (id) => {
    setTasks(tasks.map(task => (task.id == id)?{...task, reminder:!task.reminder}:task));
  }

  const deleteMe = (id) => {
    setTasks(tasks.filter(task => (task.id !== id)));
  }

  return (
    <div className="container">
      <Header title="Task Manager" onAddForm={onAddForm}/>
      {showAddForm && <AddForm onSaveTask={onSaveTask} />}
      <Tasks tasks={tasks} deleteMe={deleteMe} toggleMe={toggleMe}/>
    </div>
  )
}

export default App;