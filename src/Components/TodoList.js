import React,{ useState } from 'react';
// import  from 'react/cjs/react.development';
import TodoForm from './TodoForm';
import Todo from './Todo';
export default function TodoList() {
    const[todos,setTodos]=useState([]);

    const addTask = task =>{
        if(!task.text){
            return
        }

    const newTodos = [task,...todos];
    setTodos(newTodos);
    }

    //remove to do list
    const removeTask= id =>{
      let updatedTasks = [...todos].filter(task => task.id !== id)
      setTodos(updatedTasks)
    }

    //task is completed.
    const completeTask = id =>{
      let updatedTasks = todos.map(todo =>{
        if(todo.id === id){
          todo.isComplete = true;
        }

        return todo;
      })
      setTodos(updatedTasks)
    }
  return <div>
        <TodoForm addTask={addTask}></TodoForm>
        <Todo todos={todos} completeTask={completeTask} removeTask={removeTask}> </Todo>
    </div>
  
}
