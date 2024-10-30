import { useState } from "react"

// eslint-disable-next-line react/prop-types
const Form = ({ onAddItem }) => {
  const [title, setTitle] = useState('')
  function handleSubmit(e) {
    e.preventDefault()

    if (!title) return

    const newItem = {
      id: Date.now(),
      title,
      checked: false
    }

    onAddItem(newItem)
    setTitle('')
  }

  return (
    <form action="" className="add-form" onSubmit={handleSubmit}>
      <h3>Ada yang mau kamu catat?</h3>
      <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
      <button>Add</button>
    </form>
  )
}

export default Form