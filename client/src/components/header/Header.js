import React, {useState, useContext} from 'react'
import {GlobalState} from "../../GlobalState"
import Menu from './img/menu.svg'
import Close from './img/close.svg'
import Cart from './img/cart.svg'
import {Link} from 'react-router-dom'

export default function Header() {
    const value = useContext(GlobalState)
    return (
        <header>
            <div className= "menu">
                <img src={Menu} alt="" width="30" />
            </div>

            <div className= "logo">
                <h1>
                    <Link to="/">Maison DC</Link>
                </h1>
            </div>

            <ul>
                <li><Link to="/">Produits</Link></li>
                <li><Link to="/login">Login / Register</Link></li>

                <li><img src={Close} alt="" width="30" className="menu" /></li>
            </ul>

            <div className= "cart">
                <Link to="/cart">
                <span>0</span>
                <img src={Cart} alt="" width="30" />
                </Link>
            </div>
        </header>
    )
}