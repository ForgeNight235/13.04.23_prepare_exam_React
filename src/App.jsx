import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Ccomponent from "./Ccomponent.jsx";
import './App.scss'
import {BrowserRouter} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <div className="App">
          <h1>It just works</h1>
          <Ccomponent/>
        </div>
      </BrowserRouter>
  )
}

export default App
