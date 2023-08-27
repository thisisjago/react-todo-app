import { MdClose } from 'react-icons/md'
function SearchTodo({ toggleEndSearch, searchTodos, showToAdd }) {
  return (
    <div className="search-form">
      <input
        onChange={e => searchTodos(e.target.value)}
        type="search"
        role="searchbox"
        placeholder="Look a todo..."
      />
      <button onClick={e => toggleEndSearch(e)}>
        <MdClose />
      </button>
    </div>
  )
}

export default SearchTodo
