import React from 'react';

function Testimonios() {
  return (
    <section className="testimonials">
          <div className="container">
            <h2>Testimonios</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-item">
              <p className="testimonial-rating">⭐⭐⭐⭐⭐</p>
              <p className="testimonial-name"><img src="/img/user.png"/><br></br>María G.</p>
              <p className="testimonial-text">
                "Little Lemon es mi restaurante favorito en la ciudad. La comida es siempre fresca y deliciosa, y el ambiente es acogedor. ¡Perfecto para una cena con amigos!"
              </p>
            </div>
            <div className="testimonial-item">
              <p className="testimonial-rating">⭐⭐⭐⭐⭐</p>
              <p className="testimonial-name"><img src="/img/user.png"/><br></br>Carlos L.</p>
              <p className="testimonial-text">
                "El servicio en Little Lemon es excepcional. Los camareros son amables y atentos, y siempre hacen que nuestra experiencia sea especial. ¡Definitivamente volveremos!"
              </p>
            </div>
            <div className="testimonial-item">
              <p className="testimonial-rating">⭐⭐⭐⭐⭐</p>
              <p className="testimonial-name"><img src="/img/user.png"/><br></br>Ana P.</p>
              <p className="testimonial-text">
                "Me encanta Little Lemon! Cada plato que he probado es una delicia. Los ingredientes son de alta calidad y las porciones son generosas. ¡Muy recomendable!"
              </p>
            </div>
            <div className="testimonial-item">
              <p className="testimonial-rating">⭐⭐⭐⭐⭐</p>
              <p className="testimonial-name"><img src="/img/user.png"/><br></br>Luis M.</p>
              <p className="testimonial-text">
                "Little Lemon es un lugar fantástico para celebrar ocasiones especiales. La atmósfera es encantadora y la comida es simplemente espectacular. ¡Nos encanta venir aquí!"
              </p>
            </div>
          </div>
        </section>
  );
}

export default Testimonios;
