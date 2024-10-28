import mysql from 'mysql2';

const connectionPool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'todo',
    port: process.env.DB_PORT ||'3301',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Test@123'
})

export default connectionPool.promise()