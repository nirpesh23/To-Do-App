import mysql from 'mysql2';

const connectionPool = mysql.createPool({
    host: 'localhost',
    database: 'todo',
    port:'3301',
    user: 'root',
    password: 'Test@123'
})

export default connectionPool.promise()