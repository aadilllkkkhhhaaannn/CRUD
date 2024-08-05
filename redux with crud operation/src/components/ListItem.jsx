import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../features/todo/todoSlice'
import { edit } from '../features/todo/todoSlice'



const ListItem = ({todo , theme}) => {

  const dispatch = useDispatch()

  // remove Todo
  const handleRemove = () => {
    dispatch(remove(todo.id))
  }

    // Edit Todo
    const handleEdit = (todo) => {
      dispatch(edit(todo))
    }
   
  
  return (
    <li className='list-group-item rounded-0'>
{todo.tittle}
{todo.description}
    <span>

    <button className={theme ? 'btn btn-primary rounded-0 float-end  my-2 display-3' : 'btn btn-dark rounded-0 float-end  my-2 display-3'}
    onClick={()=> handleRemove(todo.id)}
     >Delete</button>

    <button className={theme ? 'btn btn-dark my-2 m-2 rounded-0 float-end' : 'btn btn-primary my-2 m-2 rounded-0 float-end'} 
    onClick={() => handleEdit(todo)}
    >Edit</button>
    </span>

    </li>
  )
}

export default ListItem
