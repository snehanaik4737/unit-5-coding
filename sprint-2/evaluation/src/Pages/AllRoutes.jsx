import React from 'react'

import { Routes,Route } from 'react-router-dom'
import { Dashboard } from './Dashboard'
import { Home } from './Home'
import { Navbar } from './Navbar'
import { PrivateRoute } from './PrivateRoute'
import { RegisterPageOne } from './RegisterPageOne'
import { RegisterPageTwo } from './RegisterPageTwo'
export const AllRoutes = () => {
  return (
   <>
   <Navbar/>
   <Routes>
   <Route path="/" element ={<Home/>}></Route>
  <Route path="/register/one" element ={<RegisterPageOne/>}></Route>
  <Route path="/register/two" element ={<RegisterPageTwo/>}></Route>

<Route path="/dashboard" element={
    <PrivateRoute>
        <Dashboard/>
    </PrivateRoute>
}></Route>

   </Routes>
   
   </>
  )
}