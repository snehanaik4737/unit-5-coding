import { Routes,Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { Navbar } from "./Navbar";
import { Users } from "./Users";
import { UserPage } from "./UserPage";
import { PrivateRoute } from "./PrivateRoute";
import {Login} from "./Login"
 export  const  AllRoutes=()=>{

    return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/users" element={
            <PrivateRoute>
                <Users/>
            </PrivateRoute>
        }></Route>

        <Route path ="/users/:id" element={
            <PrivateRoute to='/login'>
                <UserPage/>
            </PrivateRoute>
        }></Route>
        <Route path="/login" element={<Login/>}></Route>
    </Routes>
    </>
    )
}