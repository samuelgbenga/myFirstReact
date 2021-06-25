import Todo from './Todo'

const Todos = ({tasks, onDelete, taskRemainder})=>{
  return(
      <>
  {tasks.map((task)=>
  <Todo task={task} onDelete={onDelete}
  taskRemainder={taskRemainder}/>)
  }
      </>
  
  )
}
  

export default Todos ;