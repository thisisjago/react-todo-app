import { MdOutlineSearch } from 'react-icons/md'

function CreateSearch({ toggleSearch, showToAdd, showToSearch }) {
  return (
    <button onClick={e => toggleSearch(e)}>
      <MdOutlineSearch />
    </button>
  )
}

export default CreateSearch
