import { useState } from 'react'

const Form = ({addTask}) =>{
 const [text, setText] = useState('')
const [day, setDay] = useState('')
const [remainder, setRemainder] = useState(false)
// add task
const onSubmit = (e)=>{
  e.preventDefault();
  if(!text){
    alert("Enter text");
    return;
  }
  addTask({text, day, remainder} )
  setText('');
  setDay('');
  setRemainder(false)
}

  return(
     <form onSubmit={onSubmit}>
     <label className='label' > Task </label>
      <input className='input' type='text' placeholder='Enter task'
      value={text}
      onChange={(e)=>setText(e.target.value)}/>
     <label className='label' > Date</label>
     <input type='text'  className='input' placeholder='Enter month & day'
       value={day}
       onChange={(e)=>setDay(e.target.value)}/>
     <div className='labelCheckbox'>
     <label> Remainder
   <input type='checkbox' checkbox={remainder}
     value={remainder}
     onChange={(e)=> setRemainder(e.currentTarget.checked)}
     /></label>
   </div>
  
     <button className='button'>add task</button>
     </form>
  )
}
  

export default Form;