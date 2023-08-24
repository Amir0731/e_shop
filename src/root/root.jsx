import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../home/index'
import Main from '../main/main'
import About from '../about/index'
import Contact from '../contact/index'
import SignUp from '../auth/Signup'
import Login from '../auth/Login'
import NotFound from '../notFound/index'
import DetailsPage from '../detailsPage'
export default function Root() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Main />}>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<SignUp />} />
                    <Route path='details' element={<DetailsPage />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    )
}
