import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = props => {
    return (
        <div>
            {props.state.todos.map(todo => <h1>{todo.item}</h1>)}
        </div>
    );
}

export default ToDoList;