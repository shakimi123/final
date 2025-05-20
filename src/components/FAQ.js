import React from 'react';

const FAQ = () => {
  return (
    <section id="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h3>What are your restaurant hours?</h3>
        <p>We are open Monday to Saturday, from 11:00 AM to 10:00 PM. We are closed on Sundays.</p>
      </div>
      <div className="faq-item">
        <h3>Do you offer vegetarian or vegan options?</h3>
        <p>Yes, we have a variety of vegetarian and vegan dishes on our menu. Feel free to ask our staff for recommendations!</p>
      </div>
      <div className="faq-item">
        <h3>Can I make a reservation online?</h3>
        <p>Currently, we do not offer online reservations, but you can call us to book a table in advance.</p>
      </div>
      <div className="faq-item">
        <h3>Do you offer delivery or takeout?</h3>
        <p>Yes, we offer both delivery and takeout options. You can place an order through our website or call us directly.</p>
      </div>
      <div className="faq-item">
        <h3>Do you have gluten-free options?</h3>
        <p>Yes, we have gluten-free options available. Our menu indicates which items are suitable for gluten-free diets.</p>
      </div>
    </section>
  );
};

export default FAQ;
