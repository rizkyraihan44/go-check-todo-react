/* eslint-disable react/prop-types */
const Stats = ({ items }) => {
  const totalItems = items.length;
  const doneItems = items.filter(item => item.checked).length;
  const percentage = Math.round((doneItems / totalItems) * 100);
  return (
    <footer className="stats">
      {items.length === 0 ? <p>Yuk mulai bikin catatan</p> : <p>{percentage === 100 ? "Kamu sudah selesai!" : `Kamu punya ${totalItems} catatan, kamu sudah selesai ${doneItems} catatan(${percentage}%)`}</p>}
    </footer>
  )
}

export default Stats