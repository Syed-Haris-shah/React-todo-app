import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState('');

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {

      setTasks(t => [...t, newTask]);
      
    }
  }

  function deleteTask(index){
    const updateTasks = tasks.filter((_,i) =>  i !== index)
    setTasks(updateTasks);
  }

  return (
    <>
      <div className='container'>
        <div className='box'>

          <h1>TODO-App</h1>

        </div>
        <div className='input'>
          <input type="text" placeholder='Add something to do....' value={newTask} onChange={handleInputChange} className='inputText' />
          <button className='add-btn' onClick={addTask}>Add</button>
        </div>
        <ul>
          {tasks.map((task,index)=>
          <li key={index}>
            <span className='text'>{task}</span>
            <button className='del-btn' onClick={()=> deleteTask(index)}>Remove</button>
          </li>
          )}
        </ul>
      </div>
    </>
  )
}

export default App
