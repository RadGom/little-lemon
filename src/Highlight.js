import React from 'react';

function Destacado() {
  return (
    <section className="highlight">
        <div className="highlight-text">
        <h1>Little Lemon</h1>
        <h4>Santo Domingo</h4>
        <p>
            Descubre Little Lemon, el destino perfecto para los amantes de la buena comida. En nuestro restaurante, cada plato es una obra maestra de sabores frescos y auténticos inspirados en la cocina mediterránea. Ubicados en una encantadora esquina de la ciudad, ofrecemos un ambiente cálido y acogedor ideal para cualquier ocasión. Ya sea que vengas a disfrutar de una cena íntima o una celebración con amigos, en Little Lemon encontrarás siempre un servicio excepcional y una experiencia culinaria inolvidable.
        </p>
        </div>
        <div className="highlight-image">
        <img src="/img/cocineros.png" alt="Equipo de cocina" />
        </div>
    </section>
  );
}

export default Destacado;
