

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
            } //close first return
    default:
        console.log("state from default", state)
        return state;

        } //close switch


}

export { initialState, todoReducer};