import db from "../../../core/database";

export default class UsersRepository{
    static insert(user){
        try {
            const result = db.execute(
                'INSERT INTO todo.users(name, email, password, created_date, deleted) VALUES (?, ?, ?, ?, false)',
            [
                user.name, user.email, user.password, new Date()
            ]);
            return result;
        } catch (error) {
            throw error;
        }
    }
}