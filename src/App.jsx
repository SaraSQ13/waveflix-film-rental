import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Navigate to= "/movie"/>}/>
      <Route path="/movie" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
       
    </div>
  )
}

export default App
