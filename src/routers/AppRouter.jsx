import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SignUpPage from '../pages/SignUpPage'
import LoginPage from '../pages/LoginPage'
import GeneratePage from '../pages/GeneratePage'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/generate' element={<GeneratePage />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default AppRouter