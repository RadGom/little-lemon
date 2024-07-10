import './App.css';
import Logo from './Logo.png';

function Nav(){
    return (
        <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item logo"><a href="#"><img src={Logo} alt="Little Lemon" className="nav-logo"/></a></li>
          <li className="nav-item"><a href="#">Inicio</a></li>
          <li className="nav-item"><a href="#">Acerca de</a></li>
          <li className="nav-item"><a href="#">Menú</a></li>
          <li className="nav-item"><a href="#">Reservas</a></li>
          <li className="nav-item"><a href="#">Pedidos en línea</a></li>
          <li className="nav-item"><a href="#">Iniciar sesión</a></li>
        </ul>
      </nav>
    );
}

export default Nav;