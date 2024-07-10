import './App.css';
import Logo from './img/Logo.png';

function Header() {
  return (
    <header>
      <meta name="description" content="Descubre Little Lemon, el destino perfecto para los amantes de la buena comida."/>
      <meta name="og:title" content="Little Lemon"/>
      <meta name="og:description" content="Descubre Little Lemon, el destino perfecto para los amantes de la buena comida."/>
      <meta name="og:image" content={Logo}/>
    </header>
  );
}

export default Header;
