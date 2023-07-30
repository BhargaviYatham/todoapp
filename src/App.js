import Form from './components/Form';
import Todos from './components/Todos';
import { useDispatch ,useSelector} from 'react-redux';
import { deleteAll } from './redux/todoapp/actions';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch()
  const todos = useSelector((state => state.operationsReducer))
  const [editFormVisibility,setEditFormVisibility] = useState(false)
  const [editTodo , setEditTodo] = useState('')

  const handleEditClick = (todo) => {
    setEditFormVisibility(true);
    setEditTodo(todo)
  }

  const cancelUpdate = () => {
    setEditFormVisibility(false);
  }

  return (
    <div className='App'>
    <div className="wrapper text-center" >
      <h3 className='text-center mt-2'>ToDo App !!</h3>
      <Form editFormVisibility = {editFormVisibility} editTodo = {editTodo} cancelUpdate={cancelUpdate}/>
      <Todos handleEditClick={handleEditClick} editFormVisibility = {editFormVisibility}/>
      {todos.length > 0 && (<button className='btn btn-danger btn-md delete-all mt-2' 
      onClick={()=>{dispatch(deleteAll())}}
      >DELETE ALL
      </button>)}
      
    </div>
    </div>
  );
}

export default App;
