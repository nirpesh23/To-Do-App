import TodoList from './TodoList';
import AddTodo from './AddTodo';
import { useState } from 'react';

export default function TabContent(props){
    const [todos, setTodos] = useState([]);

    switch (props.activeTab) {
      case 'tab1':
        return( 
          <>
            <TodoList todos={todos} setTodos={setTodos} activeTab={props.activeTab}></TodoList>
            <AddTodo setTodos={setTodos}></AddTodo>
          </>
        )
      case 'tab2':
        return( 
            <>
              <TodoList todos={todos} setTodos={setTodos} activeTab={props.activeTab}></TodoList>
            </>
          )
      case 'tab3':
        return( 
            <>
              <TodoList todos={todos} setTodos={setTodos} activeTab={props.activeTab}></TodoList>
            </>
          )
      default:
        return null;
    }
};