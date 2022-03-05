const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
let todos = []

todoButton.addEventListener('click',addTodo)
document.addEventListener('DOMContentLoaded', getTodoListOnLoad)

function addTodo(e){

    e.preventDefault()
    let todoDiv = document.createElement('div')
    todoList.appendChild(todoDiv)
    
    let newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    todoDiv.appendChild(newTodo)

    saveToLocalStorage(todoInput.value)

    todoInput.value=''

}

function saveToLocalStorage(todo){
    let todos
    if (localStorage.getItem(todos)=== null){
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem(todos))
    }
    todos.push(todo)

    localStorage.setItem('todos', JSON.stringify(todos))
}

function getTodoListOnLoad(){
    let todos
    if (localStorage.getItem(todos)=== null){
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem(todos))
    }

    if(localStorage.getItem('todos')){
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    todos.forEach((todo)=>{

        let todoDiv = document.createElement('div')
        todoList.appendChild(todoDiv)

        let newTodo = document.createElement('li')
        newTodo.innerText = todo
        todoDiv.appendChild(newTodo)
    })
}