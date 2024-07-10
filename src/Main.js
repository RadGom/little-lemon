import './App.css';

function Main(){
    return (
        <main className="main-content">
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

        <section className="specials container">
          <h2>Especiales</h2>
          <div className="specials-grid">
            <div className="special-item">
              <img src="/img/greek-salad.jpg" alt="Ensalada griega" />
              <h3>Ensalada griega</h3>
              <p className="price">$250.00</p>
              <p>
                Una refrescante combinación de pepino, tomate, cebolla roja,
                pimientos, aceitunas Kalamata y queso feta, todo aderezado con
                aceite de oliva y orégano.
              </p>
              <button className="order-button">Ordenar por delivery <i class="fa-solid fa-motorcycle"></i></button>
            </div>
            <div className="special-item">
              <img src="/img/bruschetta.jpg" alt="Bruschetta" />
              <h3>Bruschetta</h3>
              <p className="price">$250.00</p>
              <p>
                Rebanadas crujientes de pan tostado, frotadas con ajo y coronadas
                con una mezcla de tomates frescos, albahaca, ajo y aceite de oliva.
              </p>
              <button className="order-button">Ordenar por delivery <i class="fa-solid fa-motorcycle"></i></button>
            </div>
            <div className="special-item">
              <img src="/img/lemon-dessert.jpg" alt="Pie de limón" />
              <h3>Pie de limón</h3>
              <p className="price">$250.00</p>
              <p>
                Un postre clásico con una base crujiente de galleta, relleno cremoso
                y ácido de limón, y una capa de merengue dorado por encima.
              </p>
              <button className="order-button">Ordenar por delivery <i class="fa-solid fa-motorcycle"></i></button>
            </div>
          </div>
        </section>
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
      </main>
    );
}

export default Main;