import { useState } from 'react'

const data = [
  { id: 1, name: "Akif" },
  { id: 2, name: "Cihan" },
  { id: 3, name: "Gizem" },
  { id: 4, name: "Ayşe" },
]
const App = () => {
  const [users, setUsers] = useState(data)
  return (
    <div>
      <h1>React Dersleri</h1>
      <input placeholder='Ara' />
      {users.map((user) => (
        <h4 key={user.id}>{user.name}</h4>
      ))}
    </div>
  )
}

export default App