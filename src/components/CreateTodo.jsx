import { MdAddTask } from 'react-icons/md'

function CreateTodo({ toggleForm }) {
  return (
    <button id="create-todo-button" onClick={e => toggleForm(e)}>
      <MdAddTask />
    </button>
  )
}

export default CreateTodo
