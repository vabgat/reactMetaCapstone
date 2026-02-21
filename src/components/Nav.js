import img from '../assets/logos/header-image.svg';
import './Nav.css';
import { Link } from 'react-router';

const Nav = () => {
    return (
        <nav className='nav-list'>
            <img src={img} alt="Logo" />
            <li><Link to="/">Home</Link></li>
            <li><a href="#about">About</a></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><a href="#contact">Contact</a></li>
        </nav >
    );
}

export default Nav;