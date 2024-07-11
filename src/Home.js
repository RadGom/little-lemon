import React from 'react';

function Home() {
  return (
    <section className="hero">
        <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Santo Domingo</h2>
        <p>
            Bienvenidos a Little Lemon, donde la pasión por la comida se
            encuentra con un ambiente acogedor y familiar. Ubicado en el
            corazón de la ciudad, nuestro restaurante ofrece una experiencia
            culinaria única, con platos frescos y auténticos que celebran los
            sabores mediterráneos.
        </p>
        <button className="cta-button">Reservar mesa</button>
        </div>
        <div className="hero-image">
        <img src="/img/restauranfood1.jpg" alt="Platos deliciosos" />
        </div>
    </section>
  );
}

export default Home;
