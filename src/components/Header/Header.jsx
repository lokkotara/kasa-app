import { NavLink } from 'react-router-dom'
import './Header.scss'

export default function Header() {
    return (
        <header className='mainHeader'>
            <img src='/images/logo_small.svg' alt="logo de l'agence Kasa"></img>
            <nav>
                <ul>
                    <li><NavLink to="/" className={ navData => navData.isActive ? "active" : "" }>Accueil</NavLink></li>
                    <li><NavLink to="/About" className={ navData => navData.isActive ? "active" : "" }>À Propos</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}