import React from 'react'
import Tick from '../assets/Tick.svg'   
import delete_icon from '../assets/delete_icon.svg'     
import not_tick from '../assets/not_tick.svg'
const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div class='flex items-center my-3 gap-2'>
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img className='w-7' src={isComplete ? Tick : not_tick} alt=""  />
            <p className={`tex-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>
                {text}
            </p>
        </div>
      <img onClick={()=>{deleteTodo(id)}} src={delete_icon} alt="" className='w-3.5 cursor-pointer' />
    </div>
  )
}

export default TodoItems
