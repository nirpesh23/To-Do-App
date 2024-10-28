import { useState } from "react";
import axios from 'axios';

export default function AddTodo(props){
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [dueDate, setDueDate] = useState();

    const setTodos = props.setTodos;

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://127.0.0.1:5000/todo', {name, description, dueDate}).then(async (res)=>{
            const response = await fetch('http://127.0.0.1:5000/todo');
            const data = await response.json();
            setTodos(data.data);
        });
    }

    return(
        <div className="ui main" style={{marginTop:"10px", position:"sticky"}}>
            <h3>Add Todo</h3>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" required onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="field">
                    <label>Description</label>
                    <input type="text" name="description" placeholder="Description" required onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <div className="field">
                    <label>Description</label>
                    <input type="date" name="Due Date" placeholder="Due Date" required onChange={(e)=>setDueDate(e.target.value)}/>
                </div>
                <button className="ui button blue">Add</button>
            </form>
        </div>
    );
}