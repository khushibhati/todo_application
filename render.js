import store from "./store.js";
function render(){
    const todos = document.querySelector(".todos")
    // todos.innerHTML = `<li class ="todo" data-id ="1">
    // <span Class="todo-title"> TOdo 1</span>
    // <div Class ="toggle-delete">
    // <input
    //     type="checkbox"
    //     name ="complated" 
    //     class="todo-title-checkbox"

    // />
    // <button type="submit" class="delete-todo-button">X</button>
    // </div>
    // </li>`;


    const todoElements = store.todos.map((todo) => `<li class ="todo" data-id =${todo.id}>
    <span Class="todo-title ${todo.complated? "completed": ""}">${todo.title}</span>
    <div Class ="toggle-delete">
    <input
        type="checkbox"
        name ="complated" 
        class="todo-checkbox"
        ${todo.complated ? "checked" : ""}
    />
    <button type="submit" class="delete-todo-button">X</button>
    </div>
    </li>`)
    .join("");
    todos.innerHTML =todoElements;
}


export default render;