import React, {useState} from 'react'
import './index.css'

const LightDarkMode = () => {
  const [isLightMode, setIsLightMode] = useState(true)

  const toggleMode = () => {
    setIsLightMode(prevMode => !prevMode)
  }

  return (
    <div className={`div ${isLightMode ? 'light' : 'dark'}`}>
      <h1>Click To Change Mode</h1>
      <button onClick={toggleMode}>
        {isLightMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  )
}

export default LightDarkMode
