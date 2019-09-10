import React, { useState, useReducer} from 'react';
import './App.css';
import { initialState, todoReducer } from "./reducers/reducer";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [newToDo, setNewToDo] = useState("");

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleChanges = event => {
    setNewToDo(event.target.value);
  }

  console.log(state);
  return (
    <div className="App">
        <h1>A "to do" app using reducers</h1>
      <form>
        <input type="text" value={newToDo} onChange={handleChanges}/>
        {/* <button onClick={() => {console.log("test");
          dispatch({ type: "UPDATE_TODO", payload: newToDo})
        }}>Commit to it!</button> */}
        <button onClick={event => {
          event.preventDefault();
          dispatch({ type: "UPDATE_TODO", payload: newToDo})
          setNewToDo("");
          }}>Working?</button>
      </form>
      <div>
      {state.todos.map(todo => 
                <div key={todo.id}>
                    <h2>{todo.item}</h2>
                    <button type="button" onClick={event => {
                        event.preventDefault();
                        alert("O hai!!!");
                        // dispatch({ type: "TOGGLE_TODO"})
                        if (todo.completed === true) {
                          document.querySelector("h2").classList.add("is-true");
                        } else {
                          document.querySelector.classList.remove("is-true");
                        }
                    }
                    }>Finished!!!</button>
                </div>
            )}
          <button>Clear complete</button>
      </div>
      {/* <ToDoList state={state} /> */}
    </div>
  );
}

export default App;
