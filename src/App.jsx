import { useState } from "react"
import Checklist from "./components/Checklist"
import Form from "./components/Form"
import Logo from "./components/Logo"
import Stats from "./components/Stats"

function App() {

  const [listItems, setListItem] = useState([])

  function handleListItem(item) {
    setListItem((listItems) => [...listItems, item])
  }

  function handleToggleItem(id) {
    setListItem((listItems) =>
      listItems.map((item) => {
        if (item.id === id) {
          return { ...item, checked: !item.checked }
        }
        return item
      })
    )
  }

  return (
    <div className="container">
      <div className="app">
        <Logo />
        <Form onAddItem={handleListItem} />
        <Checklist items={listItems} onToggleItem={handleToggleItem} />
        <Stats items={listItems} />
      </div>
    </div>
  )
}

export default App
