import Item from "./Item"

/* eslint-disable react/prop-types */
const Checklist = ({ items, onToggleItem }) => {
  return (
    <div className="list">
      <ul>
        {items.map(item => (
          <Item item={item} key={item.id} onToggleItem={onToggleItem} />
        ))}
      </ul>
    </div>
  )
}

export default Checklist