import React, {useState, useContext} from 'react'
import { GlobalState } from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import Cart from './icon/cart.svg'
import {Link} from 'react-router-dom'

export default function Header() {
    const value = useContext(GlobalState)
    return (
        <header>
            <div className="menu">
                <img src= {Menu} alt="" width="30" />
            </div>
            <div className="logo">
                <h1>
                    <Link to="/">Maison DC</Link>
                </h1>
            </div>
            <ul>
                <li><Link to="/">Produits</Link></li>
            </ul>
        </header>
    )
}
