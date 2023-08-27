import { useState } from 'react'
import { MdAssignmentAdd, MdClose } from 'react-icons/md'

export default function AddTodo({ addNewTodo, toggleAddition, showToSearch, showToAdd }) {
  const [input, setInput] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (input === '') return
    addNewTodo(input)
    setInput('')
  }

  return (
    <form className="add-form" onSubmit={e => handleSubmit(e)}>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        type="text"
        placeholder="Anything to do?"
      />
      <button>
        <MdAssignmentAdd />
      </button>
      <button onClick={e => toggleAddition(e)}>
        <MdClose />
      </button>
    </form>
  )
}
