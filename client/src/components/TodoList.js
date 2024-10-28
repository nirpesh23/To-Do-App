import { useEffect, useState } from "react";
import ToDoItem from "./TodoItem";
import axios from "axios";
import Modal from "./Modal";
import { BASE_URL } from "../constants";

export default function TodoList(props){
    const [open, setOpen] = useState(false);
    const [updatedId, setUpdatedId] = useState();

    const {todos, setTodos, activeTab} = props;

    async function fetchTodoItems(){
        try {
            const response = await fetch(`${BASE_URL}/todo`);
            const data = await response.json();
            setTodos(data.data);
        } catch (error) {
            console.error("Error fetching todo items:", error);
        }
    }

    function handleOnDelete(id){
        axios.delete(`${BASE_URL}/todo/${id}`)
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }

    function handleOnUpdate(data){
        setOpen(false);
        axios.put(`${BASE_URL}/todo/${updatedId}`, data).then(async (res)=>{
            const response = await fetch(`${BASE_URL}/todo`);
            const data = await response.json();
            setTodos(data.data);
        });
    }

    function setComplete(id){
        axios.put(`${BASE_URL}/todo/${id}/complete`).then(async (res)=>{
            const response = await fetch(`${BASE_URL}/todo`);
            const data = await response.json();
            setTodos(data.data);
        });
    }

    useEffect(()=>{
        try {
            if(!todos.length){
                fetchTodoItems()
            }
        } catch (error) {
            console.log(error)
        }
    }, [])
    
    const modalOptions = {
        setUpdatedId,
        open,
        setOpen,
        handleOnUpdate,
        todos,
        updatedId
    }

    const list = todos?.map((item)=>{
        console.log("🚀 ~ list ~ item:", item)
        return (
            <ToDoItem data={item} handleOnDelete={handleOnDelete} modalOptions={modalOptions} setComplete={setComplete} activeTab={activeTab}></ToDoItem>
        )
    });

    return (
        <div>
            <Modal modalOptions={modalOptions}></Modal>
            <div className="ui celled list" style={{marginTop:"2px",overflowY: "scroll",textAlign: "justify", maxHeight:"300px"}}>
                {list?.length ? list : <p style={{textAlign:"center"}}>No Tasks!</p>}
            </div>
        </div>
    );
}