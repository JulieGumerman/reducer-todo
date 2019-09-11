import React, { useState, useReducer} from 'react';
import './App.scss';
import { initialState, todoReducer } from "./reducers/reducer";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [newToDo, setNewToDo] = useState("");

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleChanges = event => {
    setNewToDo(event.target.value);
  }

  console.log("console log from app", state);
  return (
    <div className="App">
        <h1>A "to do" app using reducers</h1>
      <form>
        <input 
          type="text" 
          value={newToDo} 
          onChange={handleChanges}
          placeholder="type todo here"
        />
\
        <button 
          class="commit-btn"
          onClick={event => {
            event.preventDefault();
            dispatch({ type: "UPDATE_TODO", payload: newToDo})
            setNewToDo("");
          }}>Commit to it!</button>
      </form>
      <div className="card-wrapper">
      {state.todos.map(todo => 
                <div key={todo.id} className="todo-card">
                    <h2 id={todo.item}>{todo.item}</h2>
                    <button onClick={event => {
                        event.preventDefault();
                        dispatch({ type: "TOGGLE_TODO", payload: todo.id})
                        const changeStyle = document.getElementById(`${todo.item}`);
                        changeStyle.classList.toggle("is-done");
                      }
                    }><i class="fas fa-check-square"></i> </button>
                </div>
            )}
        <div className="button-box">
          <button 
            className="clear-complete"
            onClick={(event) => {
              event.preventDefault();
              dispatch({type: "DELETE_COMPLETED"});
            }}>Clear complete</button>
        </div>    
      </div>
      {/* <ToDoList state={state} /> */}
    </div>
  );
}

export default App;
