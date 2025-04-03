import React from 'react';

function Cta() {
  const handleOrderClick = () => {
    window.location.href = 'http://127.0.0.1:8000/order/';
  };

  return (
    <a href="http://127.0.0.1:8000/order/" target="_blank" rel="noreferrer">
      <button
        onClick={handleOrderClick}
        className="btn btn-primary"
        type="button"
      >
        Order Now
      </button>
    </a>
  );
}

export default Cta;
