import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = props => {
    return (
        <div>
            {props.state.todos.map(item => <ToDoItem todos={props.state.todos}/>)}
        </div>
    );
}

export default ToDoList;