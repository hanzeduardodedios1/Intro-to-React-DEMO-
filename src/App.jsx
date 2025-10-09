import { useState } from 'react'
import Button from './components/Button'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  function incrementCount() {
    
    setCount(count + 1);
  }
  function decrementCount() {
    if (count > 0) {
      setCount(count - 1);
    }
    
  }
  return (
    <div className="App">
      <h1>React Demo</h1>
      <p>Count: {count}</p>
      <Button onClick={() => incrementCount()}>Increment</Button>
      <Button onClick={() => decrementCount()}>Decrement</Button>
    </div>
  )
}

export default App
