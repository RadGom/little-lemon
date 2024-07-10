import './App.css';
import Logo from './img/Logo.png';

function Nav(){
    return (
        <nav>
            <img src={Logo}/>
            <ul>
                <li><a href="">Inicio</a></li>
                <li><a href="">Acerca de</a></li>
                <li><a href="">Menú</a></li>
                <li><a href="">Reservas</a></li>
                <li><a href="">Pedidos en línea</a></li>
                <li><a href="">Iniciar sesión</a></li>
            </ul>
        </nav>
    );
}

export default Nav;