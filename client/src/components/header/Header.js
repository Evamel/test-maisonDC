import React, {useContext} from 'react'
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
                <img src={Menu} alt="Menu" width="30" />
            </div>

            <div className= "logo">
                <h1>
                    <Link to="/">Maison DC</Link>
                </h1>
            </div>

            <ul className="navigation">
                {/* Adding some links in the navigation */}
                <li>Accueil</li>
                <li>Coaching déco</li>
                <li><Link to="/">Produits</Link></li>
                <li>Inspiration</li>
                <li className="Tologin"><Link to="/login">Se connecter</Link></li>
                <li><img src={Close} alt="Une croix" width="20" className="menu" /></li>
                <li>Contact</li>
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