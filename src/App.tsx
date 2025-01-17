import { Contador } from "./Contador"
import { Trabajo } from "./Trabajo"
function App() {

  return (
    <>
      <div className="bg-lime-200 h-full w-full">
        <h1 className="text-lime-800 text-7xl">Aprendiendo</h1>
        <Contador/>
        <Trabajo/>
      </div>
    </>
  )
}

/* function Contador(){
  const number = 5
  return (
    <div>
      {number}
    </div>
  )
} */

export default App


/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App */
