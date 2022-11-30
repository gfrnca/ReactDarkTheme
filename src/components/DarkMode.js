import { useState } from "react"
import './DarkMode.css'

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false)

  return(
    <div className={`page-wrapper ${darkMode && 'dark-mode'}`}>
      <button className="dark" onClick={() => setDarkMode(true)}>Dark Mode</button>
      <button className="light" onClick={() => setDarkMode(false)}>Light Mode</button>
    </div>
  )
}