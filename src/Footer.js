import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Logo from './Logo-footer.png';

function Footer(){
    return(
        <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={Logo} alt="Little Lemon Logo" />
        </div>
        <div className="footer-links">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/specials">Especiales</Link></li>
            <li><Link to="/testimonials">Testimonios</Link></li>
            <li><Link to="/highlight">Destacado</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contacto</h3>
          <p><strong>Dirección:</strong> Av. Abraham Lincoln esq. Gustavo Mejía Ricart</p>
          <p><strong>Teléfono:</strong> 809-220-1111</p>
          <p><strong>E-Mail:</strong> info@littlelemon.com</p>
        </div>
        <div className="footer-social">
          <h3>Redes Sociales</h3>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Little Lemon Restaurant. All rights reserved</p>
      </div>
    </footer>
    );
}

export default Footer;