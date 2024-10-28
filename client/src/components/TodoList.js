import { useEffect, useState } from "react";
import ToDoItem from "./TodoItem";
import axios from "axios";
import Modal from "./Modal";
import FilterButton from "./Filter";

export default function TodoList(props){
    const [open, setOpen] = useState(false);
    const [updatedId, setUpdatedId] = useState();

    const {todos, setTodos, activeTab} = props;

    async function fetchTodoItems(){
        try {
            const response = await fetch('http://127.0.0.1:5000/todo');
            const data = await response.json();
            console.log("🚀 ~ fetchTodoItems ~ data:", data)
            setTodos(data.data);
        } catch (error) {
            console.error("Error fetching todo items:", error);
        }
    }

    function handleOnDelete(id){
        axios.delete(`http://127.0.0.1:5000/todo/${id}`)
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }

    function handleOnUpdate(data){
        setOpen(false);
        axios.put(`http://127.0.0.1:5000/todo/${updatedId}`, data).then(async (res)=>{
            const response = await fetch('http://127.0.0.1:5000/todo');
            const data = await response.json();
            setTodos(data.data);
        });
    }

    function setComplete(id){
        axios.put(`http://127.0.0.1:5000/todo/${id}/complete`).then(async (res)=>{
            const response = await fetch('http://127.0.0.1:5000/todo');
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
    
    const getCompletedSearchResult = async ()=>{
        try {
            const response = await fetch('http://127.0.0.1:5000/todo/completed',);
            const data = await response.json();
            setTodos(data.data);
        } catch (error) {
            console.error("Error fetching todo items:", error);
        }
    }

    const getUpcomingSearchResult = async ()=>{
        try {
            const response = await fetch('http://127.0.0.1:5000/todo/upcoming',);
            const data = await response.json();
            setTodos(data.data);
        } catch (error) {
            console.error("Error fetching todo items:", error);
        }
    }
    const completeOptions = {
        name : "Done",
        btnClass:"ui button green",
        margin: "90%",
        float: "right",
    }

    const upcomingOptions = {
        name : "Upcoming",
        btnClass:"ui button purple",
        margin: "80%",
    }
    
    const modalOptions = {
        setUpdatedId,
        open,
        setOpen,
        handleOnUpdate
    }

    switch(activeTab){
        case 'tab2':
            getCompletedSearchResult();
            break;
        case 'tab3':
            getUpcomingSearchResult();
            break;
        default:
            break;
    }

    const list = todos?.map((item)=>{
        console.log("🚀 ~ list ~ item:", item)
        return (
            <ToDoItem data={item} handleOnDelete={handleOnDelete} modalOptions={modalOptions} setComplete={setComplete}></ToDoItem>
        )
    });

    return (
        <div>
            <Modal modalOptions={modalOptions}></Modal>
            <div className="ui celled list" style={{marginTop:"10px",overflowY: "scroll",textAlign: "justify", maxHeight:"300px"}}>
                {list?.length ? list : <p style={{textAlign:"center"}}>No Tasks!</p>}
            </div>
        </div>
    );
}