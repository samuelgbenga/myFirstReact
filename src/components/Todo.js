import { FaTimes } from 'react-icons/fa'

const Todo = ({task, onDelete, taskRemainder})=>{
return(
    <div className={`task ${task.remainder ? 'remainder': ''}`} key={task.id} onDoubleClick={()=>taskRemainder(task.id)}>
    <h3>{task.text} <FaTimes className='deletIcon'
      onClick={()=>onDelete(task.id)}/></h3>
    <p>{task.day}</p>
    </div>
  )
}
export default Todo;