import EditTodo from './EditTodo'
import { MdDelete, MdEditSquare, MdOutlineUpdate, MdDone } from 'react-icons/md'

function TodoItem({
  id,
  title,
  completed,
  editing,
  toggleComplete,
  toggleEditing,
  updateTodo,
  deleteTodo,
}) {
  // CSS Variables
  const lineThroughOn = { textDecoration: 'line-through', width: '100%' }
  const lineThroughOff = { textDecoration: 'none', width: '100%' }
  // ----------------------------------------------------------------
  return (
    <li className="list">
      <input type="checkbox" onChange={() => toggleComplete(id)} checked={completed} />
      <p style={completed ? lineThroughOn : lineThroughOff}>
        {editing ? <EditTodo id={id} title={title} updateTodo={updateTodo} /> : title}
      </p>
      <button onClick={() => toggleEditing(id)}>
        {editing ? <MdOutlineUpdate /> : <MdEditSquare />}
      </button>
      <button onClick={() => deleteTodo(id)}>
        <MdDelete />
      </button>
    </li>
  )
}

export default TodoItem
