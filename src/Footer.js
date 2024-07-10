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
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Acerca de</a></li>
            <li><a href="#">Menú</a></li>
            <li><a href="#">Reservas</a></li>
            <li><a href="#">Pedidos en línea</a></li>
            <li><a href="#">Iniciar sesión</a></li>
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
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
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