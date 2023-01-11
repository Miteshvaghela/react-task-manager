import {React, useState} from 'react'; 
import './App.css';
import Header from './components/Header';
import AddForm from './components/AddForm'; 
import Tasks from './components/Tasks'; 
// https://github.com/Miteshvaghela/react-task-manager.git
const App = ({}) => {

  const [showAddForm, setShowAddFrom] = useState(false);

  const [tasks, setTasks] = useState([])

  const onAddForm = () => {

    setShowAddFrom(!showAddForm);
    
  }

  const onSaveTask = (obj) => {
    
    const newTask = {
      id : Math.floor(Math.random()*1000)+1,
      title : obj.title,
      day : obj.day,
      reminder : obj.reminder
    }
    setTasks([...tasks, newTask]);
  } 

  const toggleMe = (id) => {
    setTasks(tasks.map(task => (task.id == id)?{...task, reminder:!task.reminder}:task));
  }

  const deleteMe = (id) => {
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