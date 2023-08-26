import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../main/main'
import About from '../about/index'
import DetailsPage from '../detailsPage'
export default function Root() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Main />}>
                    <Route index element={<Main />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Main />} />
                    <Route path='login' element={<Main />} />
                    <Route path='register' element={<Main />} />
                    <Route path='details' element={<DetailsPage />} />
                    <Route path='*' element={<Main />} />
                </Route>
            </Routes>
        </div>
    )
}
