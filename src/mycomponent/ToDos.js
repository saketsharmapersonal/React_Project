import React from 'react';
import ToDoItems from './ToDoItems';

export default function ToDos(props) {
  return (
    <div className="container">
        <h3 className='text-center my-3'>ToDos List</h3>
        {props.todos.length===0? "No Todos to display":
        props.todos.map((todo)=>{
            return <ToDoItems todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        })
    }
        
    </div>
  )
}
