import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Home} from "./components/Home"
import {About} from "./components/About"
import {Routes,Route} from "react-router-dom"
import {Navbar} from "./components/Navbar"
import {Products} from "./components/Products"
import{UsersList} from "./components/UsersList"
import{UsersDetails} from "./components/UsersDetails"
function App() {

  return (
    <div className="App">
      <Navbar/>{" "}
      <Routes>
        <Route path={"/"} element={<Home/>}></Route>
        <Route path={"/about"} element={<About/>}></Route>
        <Route path={"/products/:id"} element={<Products/>}></Route>
        <Route path={"/users" } element={<UsersList/>} ></Route>
        <Route path="/users/:id" element={<UsersDetails/>}></Route>
      </Routes>
    </div>
  )
}

export default App
