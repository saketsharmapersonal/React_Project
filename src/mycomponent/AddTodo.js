import React, { useState } from 'react'

const AddTodo = (props) => {
    const [title, setTitle]=useState("");
    const [desc, setDesc]=useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Desc cannot be blank");
        }
        props.addTodo(title, desc);
    }
    return (
        <div className="container">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}> 
                <div className="mb-3">
                    <label for="title" className="form-label">Todo Title</label>
                    <input type="text" className="form-control" id="title" value={title} onChange={(e)=>{setTitle(e.target.value)}}
                    aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                    <label for="desc" className="form-label">Desctiption</label>
                    <input type="text" className="form-control" id="desc" value={desc} onChange={(e)=>{setDesc(e.target.value)}} />
                </div>
                
                <button type="submit" className="btn btn-primary">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
