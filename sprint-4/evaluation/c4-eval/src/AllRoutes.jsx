import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Companies } from './Companies'
import { Employee } from './Employee'
import { Employees } from './Employees'
import { Home } from './Home'

export const AllRoutes = () => {
  return (
  <>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/company" element={<Companies/>}></Route>
    <Route path="/employee" element={<Employees/>}></Route>
    <Route path="/employee/:id" element={<Employee/>}></Route>
  </Routes>
  
  </>
  )
}
