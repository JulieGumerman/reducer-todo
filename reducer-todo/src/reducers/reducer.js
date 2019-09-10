

let initialState = {todos: [{
    item: "learn about reducers",
    completed: false,
    id: 4782931458943
}]}

const todoReducer = (state, action) => {
    console.log("state from reducer", state);
    switch(action.type) {
        case "UPDATE_TODO": 
        return {
            todos: [...state.todos, {
                item: action.payload, 
                completed: false,
                id: Date.now()
            } ]
        }; //close first return
        case "TOGGLE_TODO":
            console.log("state.todos", state.todos);
            return {todos: state.todos.map(item => {
                if (item.id !== action.payload) {
                    return item;
                } else {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
            })}//end map

        case "DELETE_COMPLETED":
            return {
                todos: state.todos.filter(item => item.completed !== true)
            }
        default:
            console.log("state from default", state)
            return state;

    } //close switch
    

}

export { initialState, todoReducer};