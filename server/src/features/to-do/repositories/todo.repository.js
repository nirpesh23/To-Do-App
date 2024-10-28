import db from '../../../core/database.js'

export default class TodoRepository{

    static insert(todoItem){
        try {
            const result = db.execute(
                'INSERT INTO todo.items(name, description, end_date, start_date, completed) VALUES (?, ?, ?, ?, false)',
            [
                todoItem.name, todoItem.description, todoItem.endDate, new Date()
            ]);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static update(todoItem){
        try {
            const result = db.execute(
                'UPDATE todo.items SET name=?, description=? WHERE id=?',
            [
                todoItem.name, todoItem.description, todoItem.id
            ]);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static updateStatusById(id){
        try {
            const result = db.execute(
                'UPDATE todo.items SET completed=true WHERE id=?',
            [
                id
            ]);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static findAll(){
        try {
            const result = db.execute('SELECT * FROM todo.items WHERE completed=0 AND end_date<=? ORDER BY id ASC',
                [
                    new Date()
                ]
            )
            return result;
        } catch (error) {
            throw error;
        }
    }

    static findAllCompleted(){
        try {
            const result = db.execute('SELECT * FROM todo.items WHERE completed=1 ORDER BY id ASC')
            return result;
        } catch (error) {
            throw error;
        }
    }

    static findAllUpcoming(){
        try {
            const result = db.execute('SELECT * FROM todo.items WHERE completed=0 AND end_date>? ORDER BY id ASC',[new Date()])
            return result;
        } catch (error) {
            throw error;
        }
    }

    static delete(id){
        try {
            const result = db.execute('DELETE FROM todo.items WHERE id=?', [id]);
            return result;
        } catch (error) {
            throw error;
        }
    }
}