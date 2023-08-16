"use client"
import React, { useState } from 'react'
import "./navbar.css"
import { FaBars } from 'react-icons/fa'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const navbar = () => {
    const [color, setColor] = useState(false)
    const [active, setActive] = useState("")
    const [hamburger, setHamburger] = useState(false)
    const changeColor = () => {
        if (window.scrollY > 0) {
            setColor(true);
        } else setColor(false);
    }
    window.addEventListener("scroll", changeColor)
    const path = usePathname()
    if (path === "/Login") {
        return
    }

    return (
        <header className={color ? "header-nav header-bg" : "header-nav"}>
            <a href="http://localhost:3000/"><img src="RBK-Logo.svg" alt="" className='logo-nav' /></a>
            <ul className={`nav-links ${active}`}>
                {color ? (<li className="nav-link" ><a href='/' style={{ color: "black" }} >Acceuil</a></li>) : (<li className="nav-link"><a href='/'>Acceuil</a></li>)}
                {color ? (<li className="nav-link" ><a style={{ color: "black" }} className='sub-menu-arrow-black'>Nos programmes</a><ul className='dropdown'><li><a href='/fullStack'>Développeur web</a></li><li><a href='/Aws'>Cloud computing AWS re/start</a></li></ul></li>) : (<li className="nav-link"><a className='sub-menu-arrow-white'>  Nos programmes</a><ul className='dropdown'><li><a href='/fullStack' >Développeur web</a></li><li><a href='/Aws'>Cloud computing AWS re/start</a></li></ul></li>)}
                {color ? (<li className="nav-link" ><a style={{ color: "black" }} className='sub-menu-arrow-black'>Nos BootCamps</a><ul className='dropdown'><li><a href='/RBK-TUNIS'>RebootKamp El Gazala</a></li><li><a href='/RBK-SOUSSE'>RebootKamp Sousse</a></li><li><a href='/RBK-ELKEF'>RebootKamp El Kef</a></li></ul></li>) : (<li className="nav-link"><a className='sub-menu-arrow-white'>Nos BootCamps</a><ul className='dropdown'><li><a href='/RBK-TUNIS'>RebootKamp El Gazala</a></li><li><a href='/RBK-SOUSSE'>RebootKamp Sousse</a></li><li><a href='/RBK-ELKEF'>RebootKamp El Kef</a></li></ul></li>)}
                {color ? (<li className="nav-link" ><a href='/contact' style={{ color: "black" }}>Contact</a></li>) : (<li className="nav-link"><a href='/contact'>Contact</a></li>)}
                {color ? (<li className="nav-link" ><a style={{ color: "black", }} className='sub-menu-arrow-black'>Autres</a><ul className='dropdown'><li><a href='/emploi-apres-diplome'>Emploi après diplome</a></li><li><a href='/continuer-a-letranger'>Continuer a l’étranger</a></li><li><a href='/events'>Events</a></li><li><a href='/Blogs'>Blog</a></li><li><a href="/Recent-Projects">Projets récemment publiés</a></li></ul></li>) : (<li className="nav-link"><a className='sub-menu-arrow-white'>Autres</a><ul className='dropdown'><li><a href='/emploi-apres-diplome'>Emploi après diplome</a></li><li><a href='/continuer-a-letranger'>Continuer a l’étranger</a></li><li><a href='/events'>Events</a></li><li><a href='/Blogs'>Blog</a></li><li><a href="/Recent-Projects">Projets récemment publiés</a></li></ul></li>)}

            </ul>
            <div className='navbar-buttons-container'>
                {color ? (<Link href={"/postuler"} ><button className='border-btn not-transparent-nav'><span className='text-btn' style={{ color: "white" }}>Inscription</span></button></Link>) : <Link href={"/postuler"} ><button className='border-btn transparent-nav'><span className='text-btn' style={{ color: "white" }}>Inscription</span></button></Link>}
                {color ? (<Link href={"/Login"}><button className='border-btn not-transparent-nav'  ><span className='text-btn ' style={{ color: "white" }}>Login</span></button></Link>) : <Link href={"/Login"}><button className='border-btn transparent-nav'><span className='text-btn' style={{ color: "white" }}>Login</span></button></Link>}
            </div>
            {color ? (hamburger ? (<div className='hamburger-container'><FontAwesomeIcon icon={faX} style={{ color: "black", fontSize: "30px", borderRadius: "10px" }} onClick={() => { setHamburger(false), setActive("") }} /></div>) : (<div className='hamburger-container'><FaBars style={{ color: "black", fontSize: "30px", borderRadius: "10px" }} onClick={() => { setHamburger(true); setActive("active") }} /></div>)) : (hamburger ? (<div className='hamburger-container'><FontAwesomeIcon icon={faX} style={{ color: "white", fontSize: "30px", borderRadius: "10px" }} onClick={() => { setHamburger(false); setActive("") }} /></div>) : (<div className='hamburger-container'><FaBars style={{ color: "white", fontSize: "30px", borderRadius: "10px" }} onClick={() => { setHamburger(true), setActive("active") }} /></div>))}
        </header >
    )
}

export default navbar