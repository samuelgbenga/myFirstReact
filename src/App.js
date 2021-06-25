import Header from "./components/Headers";
import Todos from "./components/Todos"
import Form from "./components/Forms"
import { useState } from 'react'

function App() {
  const [showTask, setShowTask]= useState(false)
  const [ tasks, setTask] = useState([
  {
    id : 1,
    text: 'go to ilorin',
    day: 'june 12',
    remainder: true
  },
  {
    id : 2,
    text:'come back from ilorin',
    day:  'june 9',
    remainder:true
  },
  {
    id : 3,
    text:'submit my siwes form',
    day: 'october 1',
    remainder: true
  }
  ]
  );
  // add task
const addTask=(task)=>{
  const id = Math.floor(Math.random() * 1000) + 1;
  const newTask ={ id, ...task};
  setTask([...tasks, newTask]);
}
  // delete function
const deleteTask = (id) =>{
 setTask(tasks.filter((task)=> task.id !== id))
}
 //set remainder
const taskRemainder = (id) =>{
 setTask(tasks.map((task)=> task.id === id ? 
    { ...task, remainder: !task.remainder} : task
 ))
}
  return (
    <div className="container">
    <Header title="Todo Tracker" showAddTask={()=> setShowTask(!showTask)} onShow={showTask}/>
   {showTask && <Form addTask={addTask}/>}
    {tasks.length > 0 ?
    <Todos tasks={tasks} onDelete={deleteTask} taskRemainder={taskRemainder}/> :  <p style={{color:'red'}}>No task to show</p>
    }
    </div>
  );
}

export default App;
