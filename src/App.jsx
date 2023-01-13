import { useState } from 'react'
import './App.scss'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Router,
  BrowserRouter,
  Link,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import { Home } from './containers/Home/Home'
import { Header } from './components/Header/Header';
import Login from './containers/Login/Login';
import Admin from './containers/Admin/Admin';
import MovieDetail from './containers/MovieDetail/MovieDetail';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Navigate to= "/movie"/>}/>
      <Route path="/movie" element={<Home/>}/>
      <Route path="/movie/:id" element={<MovieDetail/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/admin" element={<Admin/>}/>
      </Routes>
      </BrowserRouter>
       
    </div>
  )
}

export default App
