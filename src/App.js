
import './App.css';
import Header from './mycomponent/header';
import Footer from './mycomponent/Footer';
import ToDos from './mycomponent/ToDos';
import React, {useState} from 'react';

function App() {
  const onDelete=(todo)=>{
    console.log("I am on delete");
    setTodos(todos.filter((e)=>{
      return e!==todo;

    }));
  }
  const [todos, setTodos]=useState( [
    {
      sno: 1,
      title: "Go to Market",
      desc: "You need to go to market !"
    },
    {
      sno: 2,
      title: "Go to Mall",
      desc: "You need to go to Mall !"
    },
    {
      sno: 3,
      title: "Go to Shop",
      desc: "You need to go to shop !"
    }
    
  ]);
  return (
    
      <>
      <Header title="To Do List"/>
      <ToDos todos={todos} onDelete={onDelete}/>
      <Footer/>
      
      </>
    
  );
}

export default App;
