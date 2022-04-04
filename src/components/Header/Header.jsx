import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <header className='mainHeader'>
            <img src='./images/logo_small.svg' alt="logo de l'agence Kasa"></img>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/About">À propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header