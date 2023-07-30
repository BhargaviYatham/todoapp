import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Icon } from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash'
import {edit2} from 'react-icons-kit/feather/edit2'
import { removeTodo,handleCheckbox } from '../redux/todoapp/actions';
const Todos = ({handleEditClick,editFormVisibility}) => {
    const todos = useSelector((state) => state.operationsReducer)
    const dispatch = useDispatch()
  return (
   todos.map((todo) =>(<div key={todo.id} className='todo-box'>
        <div className='content'>
            {editFormVisibility === false && (
                <input type="checkbox" checked={todo.completed}
                onChange={()=>{dispatch(handleCheckbox(todo.id))}}></input>
            )}
            
            <p style={todo.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}} className='mt-2'>
                {todo.todo}
            </p>
        </div>
        <div className='actions-box'>
            {editFormVisibility === false && (
                <>
                 <span onClick={()=>handleEditClick(todo)}><Icon icon={edit2}/></span>
                 <span onClick={()=> dispatch(removeTodo(todo.id))}><Icon icon={trash}/></span>
                </>
            )}
         
        </div>
    </div>))
  )
}

export default Todos