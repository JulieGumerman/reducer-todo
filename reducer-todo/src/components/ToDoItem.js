import React from "react";

const ToDoItem = props => {
    return (
        <h3 key={props.todos.id}>{props.todos.item}</h3>
    );
}

export default ToDoItem;