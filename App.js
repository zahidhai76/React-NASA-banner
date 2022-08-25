import { useState, useEffect } from 'react'
import Header from './components/Header'
import './App.css'

const App = () => {
  const[APOD, setAPOD] = useState([])
  const APIKey = 'URAwWVhjpR3IUOVcxerfUotTLRAsjq4r8x9uiRQI'

  useEffect(() => {
    fetchPhoto()

    async function fetchPhoto() {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${APIKey}`)
      const data = await response.json()
      setAPOD(data)
    }
  }, [])

  return (
    <div>
      <Header data={APOD}/>
    </div>
  )
}

export default App