import React from 'react';

const Menu = () => {
  return (
    <section id="menu">
      <h2>Our Menu</h2>
      <div className="menu-items">
        <div className="menu-item">
          <img src="images/pasta.jpg" alt="Pasta" />
          <h3>Deluxe Pasta</h3>
          <p>A creamy pasta dish with fresh herbs and cheese.</p>
        </div>
        <div className="menu-item">
          <img src="images/pizza.jpg" alt="Pizza" />
          <h3>Margherita Pizza</h3>
          <p>Classic pizza with fresh mozzarella, basil, and tomatoes.</p>
        </div>
        <div className="menu-item">
          <img src="images/burger.jpg" alt="Burger" />
          <h3>Gourmet Burger</h3>
          <p>Juicy burger with cheese, bacon, and all the fixings.</p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
