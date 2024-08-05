import React, { useEffect, useState } from 'react'
import ListItem from './ListItem'
import {useDispatch, useSelector } from 'react-redux'
import { add } from '../features/todo/todoSlice';



const ListGroup = ({theme}) => {

  const dispatch = useDispatch()

  const [tittle , setTittle] = useState("") 
  const [description , setDescription] = useState("") 


  const {allTodos} = useSelector((state) => state.todos);
  const {edit} = useSelector((state) => state.todos)

  // add Todo

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(add({id : crypto.randomUUID() , tittle : tittle}))
    setTittle("")
  }

  // edit Todo

  useEffect(() => {
    setTittle(edit.todo.tittle)
    setDescription(edit.todo.description)
  },[edit])


  return (
  <div className= "container-fluid p-5">
   <div className="card my-3 p-3 rounded-0">
   <form className='my-1'
    onSubmit={handleSubmit}
    >
    <input placeholder='Enter Tittle Here...' className='form-control my-3 rounded-0' 
    required 
    onChange={(e) => setTittle(e.target.value)}
    value={tittle}
    />
  
   
        <button type='submit' className={theme ? "btn btn-warning w-100 rounded-0" : "btn btn-danger w-100 rounded-0"}>Save</button>
    </form>
   </div>
<ul className='list-group'>
{allTodos.map((todo) => (
        <ListItem theme={theme} key={todo.id} todo={todo} />
      ))}

</ul>
  </div>
  );
};

export default ListGroup;



