import './App.css';
import Logo from './img/Logo-footer.png';

function Footer(){
    return(
        <footer>
            <div>
                <img src={Logo}/>
            </div>
            <div>
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Acerca de</a></li>
                    <li><a href="">Menú</a></li>
                    <li><a href="">Reservas</a></li>
                    <li><a href="">Pedidos en línea</a></li>
                    <li><a href="">Iniciar sesión</a></li>
                </ul>
            </div>
            <div>
                <h4>Contacto</h4>
                Dirección: Av. Abraham Lincoln esq. Gustavo Mejía Ricart<br/>
                Teléfono: 809-220-1111<br/>
                E-Mail: info@littlelemon.com
            </div>
            <div>
                <h4>Redes Sociales</h4>
            </div>
        </footer>
    );
}

export default Footer;