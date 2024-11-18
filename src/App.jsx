import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import NavBar from "./Components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import DetailsPokemon from "./Pages/DetailsPokemon"






function App() {

    return <>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true, }}>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>} ></Route>
          <Route path='/Pokemon/:name' element={<DetailsPokemon></DetailsPokemon>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  }
  
  export default App
  