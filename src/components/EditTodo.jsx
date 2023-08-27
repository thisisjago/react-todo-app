function EditTodo({ id, title, updateTodo }) {
  return (
    <input
      className="edit-input"
      type="text"
      value={title}
      onChange={event => updateTodo(id, event.target.value)}
    />
  )
}

export default EditTodo
