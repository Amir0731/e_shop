import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import cl from './style.module.css'
import { ReactComponent as Lupa } from '../images/lupa.svg'
import { ReactComponent as Basket } from '../images/basket.svg'
import { ReactComponent as Heart } from '../images/heart.svg'
import { ReactComponent as User } from '../images/user.svg'
export default function Header() {
    return (
        <div>
            <div className={cl.headerTopWrapper}>
                <div className={cl.headerTopInfoBox}>
                    <p className={[cl.headerTopInfoText]}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                    <Link className={cl.headerTopLink} to={'/'}>ShopNow</Link>
                </div>
                <select className={cl.headerTopSelect} name="languagesSelect" id="languagesSelect">
                    <option value="english">English</option>
                    <option value="russian">Русский </option>
                    <option value="uzbek">O'zbekcha </option>
                </select>
            </div>
            <div className={cl.headerWrapper}>
                <div className="container">
                    <div className={cl.headerNavbar}>
                        <div className={cl.navbarInfoBox}>
                            <h1 className={cl.navbarTitle}>Exclusive</h1>
                            <div className={cl.navbarLinksBox}>
                                <NavLink className={cl.link} to={'/'}>Home</NavLink>
                                <NavLink className={cl.link} to={'contact'}>Contact</NavLink>
                                <NavLink className={cl.link} to={'about'}>About</NavLink>
                                <NavLink className={cl.link} to={'register'}>Sign Up</NavLink>
                            </div>
                        </div>
                        <div className={cl.secondInfoBox}>
                            <div className={cl.inpWrapper}>
                                <input className={cl.serachInp} type="text" placeholder='What are you looking for?' />
                                <Lupa />
                            </div>
                            <div className={cl.svgsWrapper}>
                                <Heart />
                                <Basket />
                                <User />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}
