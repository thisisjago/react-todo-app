import { MdClearAll } from 'react-icons/md'
function ClearCompletedTodos({ clearTodos }) {
  return (
    <button onClick={e => clearTodos(e)}>
      <MdClearAll />
    </button>
  )
}

export default ClearCompletedTodos
