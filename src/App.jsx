import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [ data, setData ] = useState();

  useEffect(() => {
    fetch('http://localhost:8080/testPino')
      .then(res => res.text())
      .then(res => setData(res))
  }, [])

  return (
    data &&
      <p className="read-the-docs">
        {data}
      </p>
  )
}

export default App
