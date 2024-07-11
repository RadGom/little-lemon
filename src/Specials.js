import React from 'react';

function Especiales() {
  return (
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
  );
}

export default Especiales;
