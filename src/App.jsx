import { useState, useEffect } from 'react'
import AddTodo from './components/AddTodo'
import CreateTodo from './components/CreateTodo'
import TodoList from './components/TodoList'
import SearchTodo from './components/SearchTodo'
import CreateSearch from './components/CreateSearch'
import ClearCompletedTodos from './components/ClearCompletedTodos'
import './App.css'

function App() {
  const [todos, setTodos] = useState(() => {
    const data = localStorage.getItem('Todo.List')
    if (data === null) return []
    return JSON.parse(data)
  })

  useEffect(() => localStorage.setItem('Todo.List', JSON.stringify(todos)), [todos])

  const [showToAdd, setShowToAdd] = useState(false)
  const [showToSearch, setShowToSearch] = useState(false)
  const [searchInput, setSearchInput] = useState('')

  const toggleForm = e => (e ? setShowToAdd(showToAdd => !showToAdd) : showToAdd)
  const toggleAddition = e => (e ? setShowToAdd(showToAdd => !showToAdd) : showToAdd)

  const toggleSearch = e => (e ? setShowToSearch(showToSearch => !showToSearch) : showToSearch)
  const toggleEndSearch = e => {
    e ? setShowToSearch(showToSearch => !showToSearch) : showToSearch
    setSearchInput('')
  }

  const searchTodos = input => setSearchInput(input)

  const addNewTodo = input => {
    setTodos(todos => [
      ...todos,
      { id: Math.random(), title: input, completed: false, editing: false },
    ])
  }

  const toggleComplete = id => {
    setTodos(todos =>
      todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    )
  }

  const toggleEditing = id => {
    setTodos(todos =>
      todos.map(todo => (todo.id === id ? { ...todo, editing: !todo.editing } : todo))
    )
  }

  const updateTodo = (id, value) => {
    setTodos(todos => todos.map(todo => (todo.id === id ? { ...todo, title: value } : todo)))
  }

  const deleteTodo = id => {
    setTodos(todos => todos.filter(todo => (todo.id === id ? !todo.id : todo)))
  }

  const clearTodos = e => (e ? setTodos(todos => todos.filter(todo => !todo.completed)) : todos)

  const taskToBeCompleted = todos.filter(todo => !todo.completed)

  return (
    <div className="container">
      <div className="header">
        <h1>todolr</h1>
        <h2>a simple todo web app</h2>
      </div>
      <div className="create-todo-container">
        {showToAdd ? (
          <AddTodo
            addNewTodo={addNewTodo}
            toggleAddition={toggleAddition}
            showToSearch={showToSearch}
            showToAdd={showToAdd}
          />
        ) : (
          <CreateTodo toggleForm={toggleForm} showToSearch={showToSearch} />
        )}
      </div>
      <div className="list-menu-container">
        <h3 className="list-title">Todos</h3>
        <div className="list-menu-buttons-container">
          {showToSearch ? (
            <SearchTodo
              toggleEndSearch={toggleEndSearch}
              searchTodos={searchTodos}
              showToSearch={showToSearch}
            />
          ) : (
            <CreateSearch toggleSearch={toggleSearch} showToAdd={showToAdd} />
          )}
          <ClearCompletedTodos clearTodos={clearTodos} />
        </div>
      </div>
      <div className="counter-container">
        <p className="counter">
          {taskToBeCompleted.length} {taskToBeCompleted.length === 1 ? 'todo' : 'todos'} to be
          completed
        </p>
      </div>
      <div className="body-container">
        <TodoList
          todos={todos.filter(todo => todo.title.toLowerCase().includes(searchInput))}
          toggleComplete={toggleComplete}
          toggleEditing={toggleEditing}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  )
}

export default App
