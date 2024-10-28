import Result from "../../../core/result.js";
import ToDoItem from "../models/todo-items.model.js";
import TodoRepository from "../repositories/todo.repository.js";

export default class ToDoService{

    static async createTodo(request){
        console.log("🚀 ~ ToDoService ~ request:", request)
        try {
            if(!request.name){
                return Result.createErrorWithMessage(new Error(), 'Name is required!');
            }
            if(!request.description){
                return Result.createErrorWithMessage(new Error(), 'Description is required!');
            }
            if(!request.dueDate){
                return Result.createErrorWithMessage(new Error(), 'Due date is required!');
            }
            const dueDate = request.dueDate || new Date()
            const todo = new ToDoItem(request.name, request.description, dueDate);
            await TodoRepository.insert(todo);
            return Result.createSuccess();
        } catch (error) {
            console.log("🚀 ~ ToDoService ~ error:", error)
            Result.createErrorWithMessage(error.message, 'Error while inserting items!')
        }
    }

    static async updateTodo(request, id){
        try {
            if(!request.name){
                return Result.createErrorWithMessage(new Error(), 'Name is required!');
            }
            if(!request.description){
                return Result.createErrorWithMessage(new Error(), 'Description is required!');
            }
            await TodoRepository.update({name:request.name, description:request.description, id});
            return Result.createSuccess();
        } catch (error) {
            Result.createErrorWithMessage(error.message, 'Error while updating items!')
        }
    }

    static async completeTodoItem(id){
        try {
            await TodoRepository.updateStatusById(id);
            return Result.createSuccess();
        } catch (error) {
            Result.createErrorWithMessage(error.message, 'Error while updating items!')
        }
    }

    static async fetchAllTodoItems(){
        try {
            const result = await TodoRepository.findAll();
            return Result.createSuccess(result[0]);
        } catch (error) {
            Result.createErrorWithMessage(error.message, 'Error while fething items!')
        }
    }

    static async fetchAllCompletedItems(){
        try {
            const result = await TodoRepository.findAllCompleted();
            return Result.createSuccess(result[0]);
        } catch (error) {
            Result.createErrorWithMessage(error.message, 'Error while fething items!')
        }
    }

    static async fetchAllUpcomingItems(){
        try {
            const result = await TodoRepository.findAllUpcoming();
            return Result.createSuccess(result[0]);
        } catch (error) {
            Result.createErrorWithMessage(error.message, 'Error while fething items!')
        }
    }

    static async deleteTodoItem(id){
        try {
            const result = await TodoRepository.delete(id);
            return Result.createSuccess();
        } catch (error) {
            Result.createError(error.message)
        }
    }


}