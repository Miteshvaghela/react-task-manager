import React, {useState, useEffect} from 'react'; 
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';


const App = ({}) => {

  const [btnName, setBtnName] = useState('Open');
  const [btnClr, setBtnClr] = useState('green');


  const [tasks, setTasks] = useState([]);


  useEffect(() => {

    const fetchData = async () => {
       const data = await fetchServerData();
       setTasks(data);
    }
    fetchData();
  });



  const fetchServerData = async () => {
    const response = await fetch('http://localhost:8000/tasks');
    const result = await response.json();
    return result;
  }

  const handleSubmit = async (obj) => {
      await fetch('http://localhost:8000/tasks', {
        method : 'post',
        headers : {
          'Content-type' : 'application/json'
        }, 
        body : JSON.stringify(obj)
      });
  }


  const deleteRecord = async (id) => {
      await fetch(`http://localhost:8000/tasks/${id}`, {
        method : 'DELETE' 
      })
  }

  const toogleReminder = async (id) => {

    const obj = tasks.filter(task => task.id === id)[0];

    const newObj = obj;
    newObj.reminder = !obj.reminder; 

    await fetch(`http://localhost:8000/tasks/${id}`, {
      method : 'put',
      headers : {
        'Content-type' : 'application/json'
      },
      body : JSON.stringify(newObj)
    })


  }

  const toggleForm = () => {
    if(btnName === 'Open'){
      setBtnName('Close');
      setBtnClr('red');
    }else{
      setBtnName('Open');
      setBtnClr('green');
    }
  }

  const btnData = {
    text : btnName,
    color : btnClr
  }

  return (
    <div className="container">
      <Header title="Task scheduler" btnData={btnData} toggleForm={toggleForm}/>
      {btnName === 'Close' && <TaskForm handleSubmit={handleSubmit}/>}
      <Tasks tasks={tasks} deleteRecord={deleteRecord} toogleReminder={toogleReminder}/>
      <Footer text="All rights reserved."/>
    </div>
  )
}

export default App; 