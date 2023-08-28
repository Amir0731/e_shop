import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../pages/main/main.jsx'
import About from '../pages/about/index.jsx'
import DetailsPage from '../pages/detailsPage/index.jsx'
import Wishlist from '../pages/wishlist/index.jsx'
import CheckOut from '../pages/check/index.jsx'
import Cart from '../pages/cart/index.jsx'
import Account from '../pages/account/index.jsx'
import NotFound from '../pages/404-error/index.jsx'
import Register from '../pages/login/index.jsx'
import Login from '../pages/register/index.jsx'
import Contact from '../pages/contact/index.jsx'
import Home from '../pages/Home/index.jsx'


// import Home from '../pages/'
export default function Root() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Main />}>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='wishlist' element={<Wishlist />} />
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                    <Route path='details' element={<DetailsPage />} />
                    <Route path='checkout' element={<CheckOut />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='cart' element={<Cart />} />
                    <Route path='account' element={<Account />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    )
}
