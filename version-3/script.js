var todoList = {
    todo: [],
    addTodo: function(todoText) {
        this.todo.push({
            todoText: todoText,
            completed: false
        })
    },
    changeTodo: function(position, value) {
        this.todo[position].todoText = value;
    },
    deleteTodo: function(position) {
        this.todo.splice(position, 1);
    },
    toggleCompleted: function(position){
        var todo = this.todo[position]
        todo.completed = !todo.completed;
    },
    toggleAll: function() {
        var totalTodo = this.todo.length
        var completedTodo = 0
        this.todo.forEach(function(todo) {
            if(todo.completed === true) {
                completedTodo++
            }
        })
        // if(completedTodo === totalTodo) {
        //     this.todo.forEach(function(todo) {
        //         todo.completed = false;
        //     });
        // } else {
        //     this.todo.forEach(function(todo) {
        //         todo.completed = true;
        //     })
        // }
        this.todo.forEach(function(todo) {
            if(completedTodo === totalTodo) {
                todo.completed = false;
            } else {
                todo.completed = true;
            }
        })
    }
}

todoList.addTodo("item 1")
todoList.addTodo("item 2")
todoList.addTodo("item 3")
todoList.addTodo("item 4")
todoList.addTodo("item 5")
todoList.addTodo("item 6")

var handlers = {
    addTodo: function () {
        var addTodoInput = document.querySelector("#add-todo-input");
        todoList.addTodo(addTodoInput.value);
        addTodoInput.value = "";
        view.displayTodo();
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.querySelector("#change-todo-position-input");
        var changeTodoValueInput = document.querySelector("#change-todo-value-input");     
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoValueInput.value);
        changeTodoPositionInput.value = "";
        changeTodoValueInput.value = "";
        view.displayTodo();        
    },
    deleteTodo: function(position){
        todoList.deleteTodo(position);
        view.displayTodo();    
    },
    toggleCompleted: function() {
        var toggleCompletedTodoPositionInput = document.querySelector("#toggle-todo-completed-position-input");
        todoList.toggleCompleted(toggleCompletedTodoPositionInput.valueAsNumber); 
        toggleCompletedTodoPositionInput.value = "";
        view.displayTodo();        
    },
    toggleAll: function () {
        todoList.toggleAll();
        view.displayTodo();        
    }
}

// Escaping the Console

var view = {
    displayTodo: function() {
        var todosUL = document.querySelector("ul");
        todosUL.innerHTML = "";        
        // for(var i = 0; i < todoList.todo.length; i++) {
        //     var todosLI = document.createElement("li");
        //     var todo = todoList.todo[i];
        //     var todoTextWithCompletion = "";
        //     if(todo.completed === true) {
        //         todoTextWithCompletion = "(x) " + todo.todoText;
        //     } else {
        //         todoTextWithCompletion = "( ) " + todo.todoText;
        //     }
        //     todosLI.textContent = todoTextWithCompletion + " ";
        //     todosLI.id = i;
        //     todosUL.appendChild(todosLI);
        //     todosLI.appendChild(this.createDeleteButton());
        // }
        todoList.todo.forEach(function(todo, position) {
            var todosLI = document.createElement("li");
            var todoTextWithCompletion = "";
            if(todo.completed === true) {
                todoTextWithCompletion = "(x) " + todo.todoText + " ";
            } else {
                todoTextWithCompletion = "( ) " + todo.todoText + " ";
            }
            todosLI.textContent = todoTextWithCompletion + "";
            todosLI.id = position;
            todosUL.appendChild(todosLI);
            todosLI.appendChild(this.createDeleteButton());
        }, this)
    },
    createDeleteButton: function() {
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        return deleteButton;
    },
    setUpEventListeners: function() {
        var todosUL = document.querySelector("ul");
        todosUL.addEventListener("click", function (event) {
            var elementClicked = event.target;
            if (elementClicked.className === "delete-button") {
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
        })
    }
}

view.displayTodo();
view.setUpEventListeners();