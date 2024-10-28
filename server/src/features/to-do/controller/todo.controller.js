import express from 'express';
import TodoService from '../services/todos.service.js';

const ToDoController = express.Router();

ToDoController.get('/', (req,res)=>{
    res.send('ping')
})

ToDoController.get('/todo',async (req,res)=>{
    const response = await TodoService.fetchAllTodoItems();
    res.send(response)
});

ToDoController.delete('/todo/:id', async (req, res)=>{
    try {
        const response = await TodoService.deleteTodoItem(req.params.id);
        res.send(response);
    } catch (error) {
        res.send(error)
    }
})

ToDoController.post('/todo', async (req, res)=>{
    try {
        const response = await TodoService.createTodo(req.body);
        res.send(response);
    } catch (error) {
        res.send(error)
    }
})

ToDoController.put('/todo/:id', async (req, res)=>{
    try {
        const response = await TodoService.updateTodo(req.body, req.params.id);
        res.send(response);
    } catch (error) {
        res.send(error)
    }
});

ToDoController.put('/todo/:id/complete', async (req, res)=>{
    try {
        const response = await TodoService.completeTodoItem(req.params.id);
        res.send(response);
    } catch (error) {
        res.send(error)
    }
});

ToDoController.get('/todo/completed', async (req,res)=>{
    const response = await TodoService.fetchAllCompletedItems();
    res.send(response);
});

ToDoController.get('/todo/upcoming', async (req,res)=>{
    const response = await TodoService.fetchAllUpcomingItems();
    res.send(response);
});

export default ToDoController;