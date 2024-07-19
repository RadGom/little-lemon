import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.png';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item logo">
            <Link to="/"><img src={Logo} alt="Logo" className="nav-logo" aria-label="Little Lemon Logo" /></Link>
          </li>
          <li className="nav-item"><Link to="/">Inicio</Link></li>
          <li className="nav-item"><Link to="/especiales">Especiales</Link></li>
          <li className="nav-item"><Link to="/testimonios">Testimonios</Link></li>
          <li className="nav-item"><Link to="/destacado">Destacado</Link></li>
          <li className="nav-item"><Link to="/reservar">Reservar</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
