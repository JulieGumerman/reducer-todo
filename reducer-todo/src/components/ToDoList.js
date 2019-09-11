import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = props => {
    return (
        <div>
            {props.state.todos.map(todo => 
                <div>
                    <h1>{todo.item}</h1>
                    <button onClick={event => {
                        event.preventDefault();
                        alert("O hai!!!")
                    }
                    }>Finished!!!</button>
                </div>
            )}
        </div>
    );
}

export default ToDoList;