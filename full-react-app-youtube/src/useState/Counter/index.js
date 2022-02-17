import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const inc = () => {
    setCount(count + 1)
  }
  const dec = () => {
    setCount(count - 1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc}>arttır</button>
      <button onClick={dec}>azalt</button>
    </div>
  )
}

export default Counter