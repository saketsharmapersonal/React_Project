
import './App.css';
import Header from './mycomponent/header';
import Footer from './mycomponent/Footer';
import ToDos from './mycomponent/ToDos';
import AddTodo from './mycomponent/AddTodo';
import React, {useState} from 'react';

function App() {
  const onDelete=(todo)=>{
    console.log("I am on delete");
    setTodos(todos.filter((e)=>{
      return e!==todo;

    }));
  }
  const addTodo=(title, desc)=>{
    console.log("Adding to do"+title, desc);
    let serial;
    if(todos.length ==0){
      serial=0;
    }else{
      serial=todos[todos.length - 1].sno+1;
    }
  
    const myTodo={
      sno:serial,
      title: title,
      desc:desc,

    }
    setTodos([...todos,myTodo]);
  }

  const [todos, setTodos]=useState( []);
  return (
    
      <>
      <Header title="To Do List"/>
      <AddTodo addTodo={addTodo}/>
      <ToDos todos={todos} onDelete={onDelete}/>
      <Footer/>
      
      </>
    
  );
}

export default App;
