const addButton= document.getElementById('add-button');


addButton.addEventListener('click',  addTodoItem);

function addTodoItem(){




}


const clearButton =document.getElementById('clear-completed-button');


clearButton.addEventListener('click', clearTodoItem);



function clearTodoItem(){

 
}






const emptyButton= document.getElementById('empty-button');


emptyButton.addEventListener('click', emptyTodo);

function emptyTodo(){




}







const saveButton=document.getElementById('save-button');

saveButton.addEventListener('click', saveTodo);

function saveTodo(){

  
}


const  todoEntryBox= document.getElementById('todo-entry-box');
const toDoList=document.getElementById('todo-list');



function newTodoItem(itemText, completed){

    let todoItem = document.createElement('li');
let toDoText=document.createTextNode(itemText);
todoItem.appendChild(toDoText);


if(completed){

    todoItem.classList.add('completed');
}

toDoList.appendChild(todoItem);

todoItem.addEventListener('dblclick', toggleTodo);


}





function addTodoItem(){

    let itemText=todoEntryBox.value;

    newTodoItem(itemText, false)
}

function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}


function clearCompletedToDoItems() {
    var completedItems = toDoList.getElementsByClassName("completed");

    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }
}
function emptyList() {
    let toDoItems = toDoList.children;
    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
    }
}
let myArray = [];
myArray.push("something to store");
myArray.push("something else to store");
alert(myArray[0]);


let toDoInfo = {
    "task": "Thing I need to do",
    "completed": false
};

function saveList() {
    let toDos = [];

    for (let i = 0; i < toDoList.children.length; i++) {
        let toDo = toDoList.children.item(i);

        let toDoInfo = {
            "task": toDo.innerText,
            "completed": toDo.classList.contains("completed")
        };

        toDos.push(toDoInfo);

    }

    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function loadList() {
    if (localStorage.getItem("toDos") != null) {
        let toDos = JSON.parse(localStorage.getItem("toDos"));

        for (let i = 0; i < toDos.length; i++) {
            let toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed);
        }
    }
}


loadList();
