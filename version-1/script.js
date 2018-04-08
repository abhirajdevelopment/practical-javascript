var todoList = {
    todo: [],
    displayTodo: function() {
        if (this.todo.length === 0) {
            console.log("Your todo list is empty!")
        } else {
            for(var i = 0; i < this.todo.length; i++) {
                if (this.todo[i].completed === true) {
                    console.log("(x)", this.todo[i].todoText, "is complete")
                } else {
                    console.log("( )", this.todo[i].todoText, "is incomplete")
                }
            }
        }
    },
    addTodo: function(todoText) {
        this.todo.push({
            todoText: todoText,
            completed: false
        })
    },
    changeTodo: function(position, value) {
        this.todo[position].todoText = value
    },
    deleteTodo: function(position) {
        this.todo.splice(position, 1)
    },
    toggleCompleted: function(position){
        var todo = this.todo[position]
        todo.completed = !todo.completed
    },
    // toggleAll: function() {
    //     for (var i = 0; i < this.todo.length; i++) {
    //         var todo = this.todo[i]
    //         todo.completed = !todo.completed
    //     }
    // },
    toggleAll: function() {
        var totalTodo = this.todo.length
        var completedTodo = 0
        for(var i = 0; i < totalTodo; i++) {
            if(this.todo[i].completed === true) {
                completedTodo++
            }
        }
        if(completedTodo === totalTodo) {
            for(var i = 0; i < totalTodo; i++) {
                this.todo[i].completed = false
            }
        } else {
            for(var i = 0; i < totalTodo; i++) {
                this.todo[i].completed = true
            }
        }
        this.displayTodo()
    }
}

todoList.addTodo("item 1")
todoList.addTodo("item 2")
todoList.addTodo("item 3")
todoList.addTodo("item 4")
todoList.addTodo("item 5")
todoList.addTodo("item 6")
todoList.toggleCompleted(0)
todoList.toggleCompleted(2)
todoList.toggleCompleted(4)
todoList.toggleCompleted(1)
todoList.toggleCompleted(3)
todoList.toggleCompleted(5)
todoList.changeTodo(0, "item 1 changed")
todoList.changeTodo(1, "item 2 changed")
todoList.toggleAll()
