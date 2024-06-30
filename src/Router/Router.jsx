import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Basket from '../Pages/Basket/Basket'
import Pubg from '../Pages/Pubg/Pubg'
import Valorant from '../Pages/Valorant/Valorant'
import MobilLegend from '../Pages/MobilLegend/MobilLegend'
import BrawlStar from '../Pages/BrawlStar/BrawlStar'
import All from '../Pages/All/All'
import Login from '../Pages/login/Login'
import Register from '../Pages/register/Register'
import Dashboard from '../Pages/dasboard/DashBoard' 
import PrivateRoute from '../Components/stockSection/PrivateRoute'
import Profile from '../Pages/profile/Profile'
import Main from '../Pages/Main/Main'
import Wishlist from '../Pages/WishList/Wishlist'
import AdminPanel from '../Pages/AdminPanel/AdminPanel'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path='/main' element={<Main />} />
        <Route path='basket' element={<Basket/>}/>
        <Route path='pubg' element={<Pubg/>}/>
        <Route path='wish' element={<Wishlist/>}/>
        <Route path='admin' element={<AdminPanel/>}/>
        <Route path='valorant' element={<Valorant/>}/>
        <Route path='mobilLegend' element={<MobilLegend/>}/>
        <Route path='brawlstar' element={<BrawlStar/>}/>
        <Route path='all' element={<All/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="" element={<PrivateRoute/>}>
          <Route path="/profile" element={<Profile/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
