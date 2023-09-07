import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AlllLoanDetails } from '../components/UserDetails/AlllLoanDetails'
import { AddLoan } from '../components/UserDetails/AddLoan'
import { Login } from '../components/UserDetails/Login'
import { Register } from '../components/UserDetails/Register'

export const AllRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<AlllLoanDetails/>} />
    <Route path='/add' element={<AddLoan/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
   </Routes>
  )
}
