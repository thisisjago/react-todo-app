import TodoItem from './TodoItem'

function TodoList({ todos, toggleComplete, toggleEditing, updateTodo, deleteTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          {...todo}
          toggleComplete={toggleComplete}
          toggleEditing={toggleEditing}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList
