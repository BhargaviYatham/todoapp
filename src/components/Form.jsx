import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo, handleEditSubmit} from '../redux/todoapp/actions';

const Form = ({editFormVisibility,editTodo,cancelUpdate}) => {

  const dispatch = useDispatch()
    const [todoValue,setTodoValue] = useState('');
    const [editValue,setEditValue] = useState('');

    useEffect(()=>{
      setEditValue(editTodo.todo)
    },[editTodo])

    const handleSubmit = (e) => {
        e.preventDefault();
        let date = new Date();
        let time = date.getTime();
        let todoObj = {
            id : time,
            todo:todoValue,
            completed : false
        }
        setTodoValue('')
        dispatch(addTodo(todoObj))
    }

    const editSubmit = (e) => {
      e.preventDefault();
      let editedObj = {
        id :editTodo.id,
        todo: editValue,
        completed:false
      }
      dispatch(handleEditSubmit(editedObj))
    }

  return (
    <>
    {editFormVisibility === false ? (
      <form className='form-group custom-form' onSubmit={handleSubmit}>
      <div className='input-and-btn'>
        <input type="text" className='form-control' required placeholder='Add Todo'
          value={todoValue} onChange={(e)=>setTodoValue(e.target.value)}/>
        <button type="submit" className='btn m-2 mb-0 mt-0 btn-md'>ADD</button>
      </div>
    </form> 
    ):(
    <form className='form-group custom-form' onSubmit={editSubmit}>
      <div className='input-and-btn'>
        <input type="text" className='form-control'  placeholder='update'
        value={editValue || ""} onChange={(e)=>setEditValue(e.target.value)}
        required/>
        <button type="submit" className='btn btn-md'>UPDATE</button>
      </div>
      <button className='btn btn-md back-btn' onClick={cancelUpdate}>BACK</button>
    </form> 
    )}
    </>
  )
}

export default Form