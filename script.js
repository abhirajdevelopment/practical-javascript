// function sayHello(person) {
//     console.log("Hello", person);
// }

// sayHello('tom');

var todos = ["item 1", "item 2", "item 3", "item 4", "item 5"];

// Display Todos Function

function displayTodos(functionName, todoName) {
    console.log(functionName, todoName);
}

displayTodos("Display Todo: ", todos);

// Add Todos Function

function addTodos(item, todoName) {
    todos.push(item);
    displayTodos("Added Todo: ", todoName);
}

addTodos("item 6", todos);

// Change Todos Function

function changeTodos(todoName, todoPosition, todoValue) {
    todoName[todoPosition] = todoValue;
    displayTodos("Changed Todo:", todoName);
}

changeTodos(todos, 0, "item 1 changed");

// Delete Todos Function

function deleteTodos(todoName, position) {
    todoName.splice(position, 1);
    displayTodos("Deleted Todo:", todoName);
}

deleteTodos(todos, 2);