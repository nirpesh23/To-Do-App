import { useState } from "react";
import axios from 'axios';
import { BASE_URL } from "../constants";

export default function AddTodo(props){
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [dueDate, setDueDate] = useState();

    const setTodos = props.setTodos;

    function handleSubmit(event){
        event.preventDefault();
        axios.post(`${BASE_URL}/todo`, {name, description, dueDate}).then(async (res)=>{
            const response = await fetch(`${BASE_URL}/todo`);
            const data = await response.json();
            setTodos(data.data);
        });
    }

    return(
        <div className="ui main" style={{marginTop:"10px",marginBottom:"20px", position:"sticky"}}>
            <h3 style={{textAlign:"center"}}>Add Todo</h3>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="two fields">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" required onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="field">
                        <label>Due Date</label> 
                        <input type="date" name="Due Date" placeholder="Due Date" required onChange={(e)=>setDueDate(e.target.value)}/>
                    </div>
                </div>
                    <div className="field">
                        <label>Description</label>
                        <input type="text" name="description" placeholder="Description" required onChange={(e)=>setDescription(e.target.value)}/>
                    </div>
                <button className="ui button blue">Add</button>
            </form>
        </div>
    );
}