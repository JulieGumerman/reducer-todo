

let initialState = {todos: [{
    item: "learn about reducers",
    completed: true,
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
            return { 
                // todos: [...state.todos, {
                //     item: todos.item, 
                //     completed: true,
                //     id: todos.id
                // } ]

            }
        default:
            console.log("state from default", state)
            return state;

    } //close switch
    

}

export { initialState, todoReducer};