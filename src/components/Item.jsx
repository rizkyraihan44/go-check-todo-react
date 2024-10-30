/* eslint-disable react/prop-types */
const Item = ({ item, onToggleItem, onDeleteItem }) => {
  return (
    <li>
      <input type="checkbox" value={item.checked} onChange={() => onToggleItem(item.id)} />
      <span style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>{item.title}</span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  )
}

export default Item