import { useState } from "react"
import './DarkMode.css'

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false)

  return(
    <div className={`page-wrapper ${darkMode && 'dark-mode'}`}>
      <h1 className={darkMode && 'dark-mode'}>Dark Mode Simple Application</h1>

      <div className="buttons-wrapper">
        <button className="dark" onClick={() => setDarkMode(true)}>Dark Mode</button>
        <button className="light" onClick={() => setDarkMode(false)}>Light Mode</button>
      </div>      
    </div>
  )
}