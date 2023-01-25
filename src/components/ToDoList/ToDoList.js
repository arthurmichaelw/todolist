import Todo from "../ToDo/ToDo";

export default function TodoList({
    todos,
    addTodo,
    completeTodo,
    deleteTodo,
    editTodoText
}) {
    return (
        <>
        <h1>My To Do List:</h1>
        <h3>New Item</h3>
        <input
        type="text"
        onKeyDown={(e) => {
            e.key === "Enter" && addTodo(e)
        }}
        />
        {todos.length ? (
            <>
            <h1>To Do Items:</h1>
            <ul className="todolist">
                {todos
                .filter((i => !i.completed))
                .map((todo) => {
                    return (
                        <Todo
                        key={todo.id}
                        todo={todo}
                        completeTodo={completeTodo}
                        deleteTodo={deleteTodo}
                        editTodoText={editTodoText}
                        />
                    )
                })
                }
            </ul>
            <h1>Completed</h1>
            <ul className="todolist">
                {todos
                .filter((i) => i.completed)
                .map((todo) => {
                    return (
                        <Todo
                        key={todo.id}
                        todo={todo}
                        completeTodo={completeTodo}
                        deleteTodo={deleteTodo}
                        editTodoText={editTodoText}
                        />
                    )
                })}
            </ul>
            </>
        ) : (
            <h1>No Todo Added Yet</h1>
        )
    
    }
        </>
    )
}