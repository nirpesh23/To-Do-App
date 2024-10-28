import express from 'express';
import bodyParser from 'body-parser';
import ToDoController from './features/to-do/controller/todo.controller.js';
import cors from 'cors';

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(cors());

app.use('/', (req, res, next)=>{
    console.log(req.url, req.method, req.body);
    next();
})
app.use('/', ToDoController);

const PORT = process.env.PORT || 5000
app.listen(PORT,'127.0.0.1',()=>{
    console.log("listening on port::: 5000");
});
