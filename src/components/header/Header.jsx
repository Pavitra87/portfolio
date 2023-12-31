import React, { useState } from 'react'
import './header.css'
// import { a } from 'react-router-dom'

const Header = () => {
    const [toggle,setToggle]=useState(false)

    // ----------
    window.addEventListener("scroll",function (){
        const header=document.querySelector(".header");
        if(this.scrollY>=80) header.classList.add("scroll-header")
        else header.classList.remove("scroll-header")
    })
    return (
        <header className="header">
            <nav className="nav container">
                <a >Pavitra</a>

                <div className={toggle ? "nav__menu show-menu":"nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav_item">
                            <a href='#home' className='nav__link active-link'>
                                <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href='#about' className='nav__link'>
                                <i className="uil uil-user nav__icon"></i>About
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href='#skills' className='nav__link'>
                                <i className="uil uil-file-alt nav__icon"></i>Skills
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href='#services' className='nav__link'>
                                <i className="uil uil-briefcase-alt nav__icon"></i>Services
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href='#qualification' className='nav__link'>
                                <i className="uil uil-scenery nav__icon"></i>Qualification
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href='#contact' className='nav__link'>
                                <i className="uil uil-message nav__icon"></i>Contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={()=>setToggle(!toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={()=>setToggle(!toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header
